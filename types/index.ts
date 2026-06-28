export type ProjectTheme = {
  /** Page background for the case-study detail view. */
  bg: string;
  /** Primary text color on that background. */
  text: string;
  /** Accent color for the project. */
  accent: string;
};

export type Project = {
  slug: string;
  index: string; // "01"
  title: string;
  /** Optional longer title used on the detail page (falls back to `title`). */
  detailTitle?: string;
  /** Tag line shown under the title, e.g. "BRAND IDENTITY | PACKAGING". */
  category: string;
  /** One-line Korean description (empty for archive cards). */
  oneLiner: string;
  role: string;
  period: string;
  contribution: string;
  /** Featured projects appear as full-width rows on Home + large Work cards. */
  featured: boolean;
  /** Whether a case-study detail page exists. */
  hasDetail: boolean;
  theme: ProjectTheme;
  /** Background image used on the Home "Selected Work" row. */
  cover: string;
  /** Square thumbnail used on the Work index cards. */
  card: string;
  /** Full-page design export sliced for the detail view. */
  source: string;
};

export type Stat = {
  value: string;
  unit?: string;
  /** Optional second value (e.g. "6yr | 3yr"). */
  value2?: string;
  unit2?: string;
  label: string;
  sublabel: string;
};

export type NavItem = { label: string; href: string };
