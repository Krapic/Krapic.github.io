import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Translations } from "@/i18n/translations";

const contactSchema = (f: Translations["form"]) =>
  z.object({
    name: z.string().trim().min(1, f.nameRequired).max(100),
    email: z.string().trim().email(f.emailInvalid).max(255),
    message: z.string().trim().min(1, f.messageRequired).max(2000),
  });

export const ContactForm = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema(t.form).safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setStatus("sending");
    const { name, email, message } = parsed.data;
    const { error } = await supabase.from("contact_messages").insert({ name, email, message });
    setStatus(error ? "error" : "sent");
    if (!error) setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="glass-card p-8 max-w-2xl mx-auto mt-8"
    >
      <h3 className="text-xl font-semibold mb-6 text-center">{t.form.title}</h3>
      {status === "sent" ? (
        <div className="flex flex-col items-center gap-3 py-8 text-center">
          <CheckCircle2 className="w-12 h-12 text-primary" />
          <p className="font-medium">{t.form.sentTitle}</p>
          <p className="text-sm text-muted-foreground">
            {t.form.sentBody}
          </p>
          <Button variant="outline" onClick={() => setStatus("idle")}>
            {t.form.sendAnother}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Input
                placeholder={t.form.namePlaceholder}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <Input
                type="email"
                placeholder={t.form.emailPlaceholder}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
          </div>
          <div>
            <Textarea
              placeholder={t.form.messagePlaceholder}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={2000}
            />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>
          {status === "error" && (
            <p className="text-sm text-destructive text-center">
              {t.form.error}
            </p>
          )}
          <Button type="submit" className="w-full" disabled={status === "sending"}>
            {status === "sending" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            {status === "sending" ? t.form.sending : t.form.send}
          </Button>
        </form>
      )}
    </motion.div>
  );
};
