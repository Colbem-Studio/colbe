"use client";

import { useState } from "react";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

interface BirthdayStepProps {
  onNext: (birthday: Date) => void;
}

export function BirthdayStep({ onNext }: BirthdayStepProps) {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState<string | null>(null);

  const currentYear = new Date().getFullYear();
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!month || !day || !year) {
      setError("Please select your full date of birth");
      return;
    }

    const birthday = new Date(Number(year), MONTHS.indexOf(month), Number(day));
    const age = (Date.now() - birthday.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

    if (age < 13) {
      setError("You must be at least 13 years old to sign up");
      return;
    }

    onNext(birthday);
  }

  return (
    <div className="w-full max-w-sm rounded-[15px] border border-border p-8">
      <h1 className="text-xl font-semibold text-foreground">When's your birthday?</h1>
      <p className="mt-1 text-sm text-muted-foreground">This won't be shown publicly.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="rounded-[15px] border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Month</option>
            {MONTHS.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="rounded-[15px] border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Day</option>
            {days.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="rounded-[15px] border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Year</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-[15px] bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Continue
        </button>
      </form>
    </div>
  );
}