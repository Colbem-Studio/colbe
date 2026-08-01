"use client";

import { useState } from "react";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Input } from "@/components/ui/input";

const OPTIONS = ["Male", "Female", "Other", "Prefer not to say"];

interface GenderStepProps {
  onNext: (gender: string) => void;
  onBack: () => void;
}

export function GenderStep({ onNext, onBack }: GenderStepProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [customGender, setCustomGender] = useState("");

  const isOther = selected === "Other";
  const canContinue = selected && (!isOther || customGender.trim().length > 0);

  function handleContinue() {
    if (!selected) return;
    onNext(isOther ? customGender.trim() : selected);
  }

  return (
    <div className="w-full max-w-sm rounded-[15px] border border-border p-8">
      <h1 className="text-xl font-semibold text-foreground">What's your gender?</h1>
      <p className="mt-1 text-sm text-muted-foreground">This helps us personalize your experience.</p>

      <div className="mt-6 space-y-2">
        {OPTIONS.map((option) => {
          const isSelected = selected === option;
          return (
            <div key={option}>
              <button
                type="button"
                onClick={() => setSelected(option)}
                className={`flex w-full items-center justify-between rounded-[15px] border px-4 py-2 text-left text-sm transition-colors ${
                  isSelected
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-input text-foreground hover:bg-accent"
                }`}
              >
                {option}
                {isSelected && (
                  <CheckCircle weight="fill" className="h-4 w-4 shrink-0 text-primary" />
                )}
              </button>

              {option === "Other" && isSelected && (
                <Input
                  autoFocus
                  placeholder="Type your gender"
                  value={customGender}
                  onChange={(e) => setCustomGender(e.target.value)}
                  className="mt-2 rounded-[15px]"
                />
              )}
            </div>
          );
        })}
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
          disabled={!canContinue}
          onClick={handleContinue}
          className="w-full rounded-[15px] bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
}