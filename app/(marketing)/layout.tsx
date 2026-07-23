// During the rebrand the whole site is replaced by the stay-tuned page, so the
// branded Nav/Footer are intentionally omitted here — the page stands alone,
// brand-neutral. Restore <Nav />/<Footer /> when the new brand ships.
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-screen flex-col">{children}</div>;
}
