// @vitest-environment node
import { readFile } from "node:fs/promises";
import { afterEach, describe, expect, it, vi } from "vitest";
import { createCv } from "../lib/generate-cv";

afterEach(() => vi.unstubAllGlobals());

describe("downloadable CV", () => {
  it("generates a single A4 page with embedded fonts and working contact/project links", async () => {
    vi.stubGlobal("fetch", async (url: string) => {
      const font = await readFile(new URL(`../../public/fonts/${url.split("/").pop()}`, import.meta.url));
      return { ok: true, arrayBuffer: async () => font.buffer.slice(font.byteOffset, font.byteOffset + font.byteLength) };
    });
    const doc = await createCv();
    expect(doc.getNumberOfPages()).toBe(1);
    expect(doc.internal.pageSize.getWidth()).toBeCloseTo(210, 0);
    expect(doc.internal.pageSize.getHeight()).toBeCloseTo(297, 0);
    const pdf = doc.output();
    expect(pdf.startsWith("%PDF-")).toBe(true);
    expect(pdf).toContain("/FontFile2");
    expect(pdf).toContain("/ToUnicode");
    expect(pdf).toContain("mailto:krapicf@gmail.com");
    expect(pdf).toContain("https://github.com/Krapic/AI-Maze-Solver");
    expect(pdf).toContain("https://mipro.hr/MIPRO2026.SSE/ELink.aspx");
  });

  it("rejects unavailable fonts rather than downloading a broken document", async () => {
    vi.stubGlobal("fetch", async () => ({ ok: false }));
    await expect(createCv()).rejects.toThrow("Unable to load CV font");
  });
});
