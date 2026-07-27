const STEPS = [
  { title: "Create a space", description: "Set up a room for your team or a one-on-one thread in seconds." },
  { title: "Invite people", description: "Add teammates with a link — no lengthy setup required." },
  { title: "Start talking", description: "Messages, files, and context stay in sync across every device." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          How it works
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
          Three steps between you and your first conversation.
        </p>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.title} className="rounded-[15px] border border-border p-6">
              <span className="text-sm text-muted-foreground">Step {i + 1}</span>
              <h3 className="mt-2 text-base font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}