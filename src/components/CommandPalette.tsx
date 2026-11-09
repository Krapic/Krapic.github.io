import { useEffect, useState } from "react";
import { Download, Github, Hash, Languages, Linkedin, Mail, Moon, Terminal } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useLanguage } from "@/i18n/LanguageContext";

const sections = [
  { key: "home", id: "hero" },
  { key: "about", id: "about" },
  { key: "experience", id: "experience" },
  { key: "projects", id: "projects" },
  { key: "skills", id: "skills" },
  { key: "contact", id: "contact" },
] as const;

export const CommandPalette = () => {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const run = (fn: () => void) => {
    setOpen(false);
    setTimeout(fn, 50);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder={t.palette.placeholder} />
      <CommandList>
        <CommandEmpty>{t.palette.empty}</CommandEmpty>
        <CommandGroup heading={t.palette.navigation}>
          {sections.map((s) => (
            <CommandItem
              key={s.id}
              value={`${t.palette.goTo} ${t.nav[s.key]}`}
              onSelect={() => run(() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" }))}
            >
              <Hash className="mr-2 h-4 w-4" />
              {t.palette.goTo} {t.nav[s.key]}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={t.palette.actions}>
          <CommandItem onSelect={() => run(() => window.dispatchEvent(new Event("portfolio:toggle-theme")))}>
            <Moon className="mr-2 h-4 w-4" />
            {t.palette.toggleTheme}
          </CommandItem>
          <CommandItem onSelect={() => run(toggleLang)}>
            <Languages className="mr-2 h-4 w-4" />
            {t.palette.switchLanguage} ({lang === "en" ? "HR" : "EN"})
          </CommandItem>
          <CommandItem
            onSelect={() => run(async () => (await import("@/lib/generate-cv")).downloadCv())}
          >
            <Download className="mr-2 h-4 w-4" />
            {t.palette.downloadCv}
          </CommandItem>
          <CommandItem onSelect={() => run(() => window.dispatchEvent(new Event("portfolio:open-terminal")))}>
            <Terminal className="mr-2 h-4 w-4" />
            {t.palette.openTerminal}
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={t.palette.links}>
          <CommandItem onSelect={() => run(() => window.open("https://github.com/Krapic", "_blank"))}>
            <Github className="mr-2 h-4 w-4" /> GitHub
          </CommandItem>
          <CommandItem onSelect={() => run(() => window.open("https://www.linkedin.com/in/frane-krapic/", "_blank"))}>
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </CommandItem>
          <CommandItem onSelect={() => run(() => (window.location.href = "mailto:krapicf@gmail.com"))}>
            <Mail className="mr-2 h-4 w-4" /> Email
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
