import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

type Line = { kind: "in" | "out"; text: string };

const isTyping = (el: EventTarget | null) => {
  const node = el as HTMLElement | null;
  return !!node && (node.tagName === "INPUT" || node.tagName === "TEXTAREA" || node.isContentEditable);
};

export const TerminalEasterEgg = () => {
  const { t, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

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
    if (open) {
      if (lines.length === 0) setLines(t.terminal.welcome.map((text) => ({ kind: "out", text })));
      setTimeout(() => inputRef.current?.focus(), 30);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => endRef.current?.scrollIntoView({ block: "end" }), [lines]);

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
        window.open("https://github.com/Krapic", "_blank");
        result = out([`${t.terminal.opening} GitHub…`]); break;
      case "linkedin":
        window.open("https://www.linkedin.com/in/frane-krapic/", "_blank");
        result = out([`${t.terminal.opening} LinkedIn…`]); break;
      case "cv":
        import("@/lib/generate-cv").then((m) => m.downloadCv());
        result = out([t.terminal.cvDownloading]); break;
      case "theme":
        window.dispatchEvent(new Event("portfolio:toggle-theme"));
        result = out([t.terminal.themeToggled]); break;
      case "lang":
        toggleLang();
        result = out(["OK"]); break;
      case "clear": setLines([]); return;
      case "exit": setOpen(false); return;
      default: result = out([`${cmd}: ${t.terminal.unknown}`]);
    }
    setLines((l) => [...l, echo, ...result]);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4 md:p-6 pointer-events-none">
      <div className="pointer-events-auto max-w-3xl mx-auto rounded-xl border border-glass-border bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-secondary/60">
          <span className="code-font text-xs">{t.terminal.title}</span>
          <button onClick={() => setOpen(false)} aria-label={t.terminal.close} className="text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div
          className="h-72 overflow-y-auto p-4 font-mono text-sm space-y-1"
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((l, i) => (
            <div key={i} className={l.kind === "in" ? "text-foreground" : "text-muted-foreground whitespace-pre"}>
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
              className="flex-1 bg-transparent outline-none text-foreground"
              aria-label="Terminal input"
              autoComplete="off"
              spellCheck={false}
            />
          </form>
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
};
