"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const dayNum = Number(day);
    const yearNum = Number(year);

    if (!month || !day || !year) {
      setError("Please select your full date of birth");
      return;
    }

    if (dayNum < 1 || dayNum > 31 || !Number.isInteger(dayNum)) {
      setError("Enter a valid day");
      return;
    }

    if (yearNum < 1900 || yearNum > new Date().getFullYear() || !Number.isInteger(yearNum)) {
      setError("Enter a valid year");
      return;
    }

    const birthday = new Date(yearNum, MONTHS.indexOf(month), dayNum);
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
          <div className="space-y-1.5">
            <Label htmlFor="month" className="sr-only">Month</Label>
            <Select value={month} onValueChange={(value) => setMonth(value ?? "")}>
              <SelectTrigger id="month" className="rounded-[15px]">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {MONTHS.map((m) => (
                  <SelectItem key={m} value={m}>{m}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="day" className="sr-only">Day</Label>
            <Input
              id="day"
              type="number"
              inputMode="numeric"
              placeholder="Day"
              min={1}
              max={31}
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="rounded-[15px]"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="year" className="sr-only">Year</Label>
            <Input
              id="year"
              type="number"
              inputMode="numeric"
              placeholder="Year"
              min={1900}
              max={new Date().getFullYear()}
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="rounded-[15px]"
            />
          </div>
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <Button type="submit" className="w-full rounded-[15px]">
          Continue
        </Button>
      </form>
    </div>
  );
}