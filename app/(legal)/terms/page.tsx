import { LegalSection } from "@/components/legal/legal-section";
import { LastUpdatedBadge } from "@/components/legal/last-updated-badge";

export default function TermsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Terms of Service</h1>
        <LastUpdatedBadge date="July 28, 2026" />
      </div>

      <div className="space-y-8">
        <LegalSection title="1. Acceptance of Terms">
          <p>Placeholder — draft content pending legal review.</p>
        </LegalSection>
        <LegalSection title="2. Acceptable Use">
          <p>Placeholder — draft content pending legal review.</p>
        </LegalSection>
        <LegalSection title="3. Account Eligibility" isLast>
          <p>Placeholder — draft content pending legal review.</p>
        </LegalSection>
      </div>
    </div>
  );
}