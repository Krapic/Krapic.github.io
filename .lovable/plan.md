
# Plan poboljšanja portfolija

Veliki obim posla - organiziram u 4 faze koje se mogu izvesti redom. Svaka faza je samostalna pa možeš testirati nakon svake.

---

## Faza 1: Brzi fixevi postojećeg (low risk, high impact)

1. **Hero typewriter layout shift** — `HeroSection.tsx`: trenutno `h-8` na containeru, ali tekst je razne duljine. Fiksirat ću `min-h` + `inline-block` s `min-width` da kursor ne pleše horizontalno.
2. **Stats - dinamički podaci** — `StatsSection.tsx`: trenutno hardkodirani brojevi. Dohvatit ću `public_repos` iz `useGitHubProfile` i `languages.length` iz `useGitHubRepos` (skup unique jezika). "Years of Experience" računam iz fiksnog start datuma.
3. **Nav active section** — `Navigation.tsx`: zamijenit ću scroll loop s `IntersectionObserver` (rootMargin "-30% 0px -60% 0px") za precizniji highlight.
4. **Footer popunjavanje** — `Footer.tsx`: dodajem GitHub/LinkedIn/Email ikone, quick nav linkove (kopija nav iteme), i mali "Back to top" gumb. Trostupčani layout na desktopu.

## Faza 2: Dizajn & UX dorade

5. **Bolji prijelazi između sekcija** — `index.css`: dodajem suptilne gradient overlay-e (`bg-gradient-to-b from-transparent via-secondary/10`) ili dekorativne separator komponente s linijom + točkom u sredini.
6. **Loading skeletoni** — Kreiram `src/components/skeletons/HeroSkeleton.tsx`, `ProjectCardSkeleton.tsx`. Prikazuju se dok `useGitHubProfile`/`useGitHubRepos` u `isLoading` stanju. Koristim shadcn `Skeleton`.
7. **Stagger animacije listi** — `ProjectsSection.tsx`, `SkillsSection.tsx`: omotam u `motion.div` s `variants` containera (`staggerChildren: 0.1`) i child variantima za fade+slide.
8. **Custom kursor efekt** — Nova `src/components/CustomCursor.tsx`: dva sloja (mali dot + veći prsten), prati `mousemove`, povećava se nad `.cursor-hover` elementima. Sakriven na touch uređajima (`hover: none` media query). Dodajem klasu u App.tsx body za conditional cursor: none.
9. **Empty state poliranje** — `ProjectsSection`/`BlogSection`: ako prazno, prikaži illustration + "Coming soon" poruku umjesto ničega.

## Faza 3: Nove značajke

10. **Dark/Light mode toggle** — Dodajem `next-themes` (već u dependencyju kao peer od shadcn) ili lagani vlastiti provider. Toggle gumb (Sun/Moon ikona) u `Navigation.tsx`. Definiram `:root` light tokene u `index.css` paralelno s postojećim `.dark` (trenutni default je dark). Persistencija u localStorage.
11. **GitHub contribution graf** — Nova `src/components/ContributionGraph.tsx` ispod Stats sekcije. Koristim `https://github-contributions-api.jogruber.de/v4/Krapic` (besplatni, no-auth API) preko React Query. Renderiram SVG grid (53 tjedna × 7 dana) s 5 razina intenziteta cyan boje.
12. **Funkcionalna kontakt forma** — Zahtijeva **Lovable Cloud + Resend connector**. 
    - Forma s zod validacijom (name, email, message)
    - Edge function `send-contact-email` koja koristi Resend connector
    - Toast notifikacije za uspjeh/error
    - Honeypot polje protiv botova
    - Napomena: trebat ćeš odobriti Cloud enable i Resend konekciju kad dođe vrijeme

## Faza 4: SEO, performanse & a11y

13. **Lazy load sekcija** — `Index.tsx`: `React.lazy()` za sve sekcije ispod Hero+About+Stats. Suspense fallback = skeleton. Smanjuje initial JS bundle.
14. **OG image** — Generiram custom 1200×630 sliku s avatar + ime + naslov koristeći imagegen (premium za čitljiv tekst). Spremam u `public/og-image.png`, dodajem u `index.html` (og:image, twitter:image).
15. **Sitemap + robots** — Kreiram `public/sitemap.xml` s jednom URL (home + #section anchors), ažuriram `public/robots.txt` da uključi `Sitemap:` direktivu (s relativnim URL-om dok nema custom domena).
16. **Accessibility audit popravci**:
    - `aria-label` na svim icon-only gumbima (social linkovi, scroll-to-top, mobile menu)
    - Provjeriti `alt` na avatar slici (postoji)
    - Heading hijerarhija (jedan h1 u Hero, h2 po sekcijama)
    - `<main>` wrapper postoji
    - Focus-visible stilovi za keyboard nav
    - Provjeriti kontrast `text-muted-foreground` na različitim pozadinama

---

## Tehnički detalji

- Sve nove komponente prate postojeći `glass-card` + framer-motion pattern
- Design tokeni isključivo iz `index.css` (HSL semantic tokens)
- Light mode tokeni: dodat ću `:root` set s istim ključevima ali svjetlim HSL vrijednostima; `.dark` ostaje default
- Kontakt forma backend je **jedina** stavka koja traži Cloud — sve ostalo je čisto frontend
- Custom kursor opt-in: samo desktop (`@media (hover: hover)`)
- Contribution API: javno dostupan, no rate limit ~10/h pa cache 1h kroz React Query

## Što NE radim

- Ne dirat business logiku/podatke koji već rade (CV link, GitHub repo lista)
- Ne mijenjam postojeću cyan/purple paletu - samo dodajem light varijantu
- Ne migriram framer-motion na nešto drugo

---

**Predlažem da krenemo redoslijedom Faza 1 → 2 → 4 → 3** (kontakt forma zadnja jer traži tvoju potvrdu za Cloud + Resend setup). Možeš mi reći ako želiš drugačiji redoslijed ili da neku stavku izbacim/dodam prije nego krenem.
