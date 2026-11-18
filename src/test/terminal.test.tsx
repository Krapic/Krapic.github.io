import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { TerminalEasterEgg } from "@/components/TerminalEasterEgg";

const command = (value: string) => {
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value } });
  const form = input.closest("form");
  if (!form) throw new Error("Terminal form missing");
  fireEvent.submit(form);
};

beforeEach(() => {
  localStorage.clear();
  render(<LanguageProvider><TerminalEasterEgg /></LanguageProvider>);
  act(() => window.dispatchEvent(new Event("portfolio:open-terminal")));
});
afterEach(() => { cleanup(); vi.restoreAllMocks(); });

describe("terminal commands", () => {
  it("switches the actual language and toggles the theme through the app event", () => {
    const toggle = vi.fn();
    window.addEventListener("portfolio:toggle-theme", toggle);
    command("  THEME  ");
    expect(toggle).toHaveBeenCalledTimes(1);
    command("lang");
    expect(localStorage.getItem("portfolio-lang")).toBe("hr");
    expect(document.documentElement.lang).toBe("hr");
    command("lang");
    expect(document.documentElement.lang).toBe("en");
    window.removeEventListener("portfolio:toggle-theme", toggle);
  });

  it("opens the real profile links without giving them access to the opener", () => {
    const open = vi.spyOn(window, "open").mockReturnValue(null);
    command("github");
    expect(open).toHaveBeenCalledWith("https://github.com/Krapic", "_blank", "noopener,noreferrer");
    command("linkedin");
    expect(open).toHaveBeenCalledWith("https://www.linkedin.com/in/frane-krapic/", "_blank", "noopener,noreferrer");
  });

  it("closes with exit, reopens with the shortcut and closes with Escape", () => {
    command("exit");
    expect(screen.queryByRole("textbox")).toBeNull();
    fireEvent.keyDown(window, { key: "`" });
    expect(screen.getByRole("textbox")).toHaveFocus();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("textbox")).toBeNull();
  });
});