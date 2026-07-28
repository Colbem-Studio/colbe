import { LegalSection } from "@/components/legal/legal-section";
import { LastUpdatedBadge } from "@/components/legal/last-updated-badge";

export default function PrivacyPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Privacy Policy</h1>
        <LastUpdatedBadge date="July 28, 2026" />
      </div>

      <div className="space-y-8">
        <LegalSection title="1. Data We Collect">
          <p>Placeholder — draft content pending legal review.</p>
        </LegalSection>
        <LegalSection title="2. How We Use Your Data" isLast>
          <p>Placeholder — draft content pending legal review.</p>
        </LegalSection>
      </div>
    </div>
  );
}