const FEATURES = [
  { title: "Real-time sync", description: "Every message reflects instantly across your whole team, no refresh needed." },
  { title: "Built-in auth", description: "Secure by default — sign-in, sessions, and permissions handled out of the box." },
  { title: "Flexible workflows", description: "Shape it around how your team already works instead of the other way around." },
];

export function MarketingFeatures() {
  return (
    <section id="features">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Everything you need, nothing you don't
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="rounded-[15px] border border-border p-6">
              <h3 className="text-base font-medium text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}