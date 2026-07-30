"use client";

import { useState } from "react";

const OPTIONS = ["Male", "Female", "Other", "Prefer not to say"];

interface GenderStepProps {
  onNext: (gender: string) => void;
  onBack: () => void;
}

export function GenderStep({ onNext, onBack }: GenderStepProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="w-full max-w-sm rounded-[15px] border border-border p-8">
      <h1 className="text-xl font-semibold text-foreground">What's your gender?</h1>
      <p className="mt-1 text-sm text-muted-foreground">This helps us personalize your experience.</p>

      <div className="mt-6 space-y-2">
        {OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setSelected(option)}
            className={`w-full rounded-[15px] border px-4 py-2 text-left text-sm transition-colors ${
              selected === option
                ? "border-primary bg-primary/10 text-foreground"
                : "border-input text-foreground hover:bg-accent"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="w-full rounded-[15px] border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
        >
          Back
        </button>
        <button
          type="button"
          disabled={!selected}
          onClick={() => selected && onNext(selected)}
          className="w-full rounded-[15px] bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
}