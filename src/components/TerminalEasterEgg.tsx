import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Button } from "@/components/ui/button";

type Line = { kind: "in" | "out"; text: string };

const isTyping = (el: EventTarget | null) => {
  const node = el as HTMLElement | null;
  return !!node && (node.tagName === "INPUT" || node.tagName === "TEXTAREA" || node.isContentEditable);
};

export const TerminalEasterEgg = () => {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (open && !initializedRef.current) {
      initializedRef.current = true;
      setLines(t.terminal.welcome.map((text) => ({ kind: "out", text })));
    }
  }, [open, t.terminal.welcome]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "`" || e.key === "~") && !isTyping(e.target)) {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("portfolio:open-terminal", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("portfolio:open-terminal", onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    inputRef.current?.focus({ preventScroll: true });
    return () => returnFocusRef.current?.focus({ preventScroll: true });
  }, [open]);

  useEffect(() => {
    if (open && outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [lines, open]);

  const out = (texts: readonly string[]) => texts.map((text) => ({ kind: "out" as const, text }));

  const exec = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const echo: Line = { kind: "in", text: raw };
    let result: Line[] = [];
    switch (cmd) {
      case "": break;
      case "help": result = out(t.terminal.help); break;
      case "about": result = out(t.terminal.about); break;
      case "skills": result = out(t.terminal.skillsOutput); break;
      case "contact": result = out(t.terminal.contactOutput); break;
      case "github":
        window.open("https://github.com/Krapic", "_blank", "noopener,noreferrer");
        result = out([`${t.terminal.opening} GitHub…`]); break;
      case "linkedin":
        window.open("https://www.linkedin.com/in/frane-krapic/", "_blank", "noopener,noreferrer");
        result = out([`${t.terminal.opening} LinkedIn…`]); break;
      case "cv":
        import("@/lib/generate-cv").then((m) => m.downloadCv()).catch(() => {
          setLines((l) => [...l, ...out([t.cv.error])]);
        });
        result = out([t.terminal.cvDownloading]); break;
      case "theme":
        window.dispatchEvent(new Event("portfolio:toggle-theme"));
        result = out([t.terminal.themeToggled]); break;
      case "lang":
        toggleLang();
        result = out([translations[lang === "en" ? "hr" : "en"].terminal.langSwitched]); break;
      case "clear": setLines([]); return;
      case "exit": setOpen(false); return;
      default: result = out([`${cmd}: ${t.terminal.unknown}`]);
    }
    setLines((l) => [...l, echo, ...result]);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4 md:p-6 pointer-events-none">
      <div role="region" aria-label={t.terminal.title} className="pointer-events-auto max-w-3xl mx-auto rounded-xl border border-glass-border bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-secondary/60">
          <span className="code-font text-xs">{t.terminal.title}</span>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label={t.terminal.close} className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </Button>
        </div>
        <div
          ref={outputRef}
          className="h-72 max-h-[60dvh] overflow-y-auto overscroll-contain p-4 font-mono text-sm space-y-1"
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((l, i) => (
            <div key={i} className={`whitespace-pre-wrap break-words ${l.kind === "in" ? "text-foreground" : "text-muted-foreground"}`}>
              {l.kind === "in" && <span className="text-primary">{t.terminal.prompt} </span>}
              {l.text}
            </div>
          ))}
          <form
            className="flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              exec(input);
              setInput("");
            }}
          >
            <span className="text-primary shrink-0">{t.terminal.prompt}</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-w-0 flex-1 bg-transparent outline-none text-foreground"
              aria-label={t.terminal.input}
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
