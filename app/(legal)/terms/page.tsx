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
          <p>
            By creating an account or using Colbe, you agree to be bound by these Terms of
            Service. If you do not agree, you may not access or use the platform.
          </p>
        </LegalSection>

        <LegalSection title="2. Eligibility">
          <p>
            You must be at least 13 years old to use Colbe. Certain features may require you
            to be 18 or older. By using Colbe, you confirm that the age you provide during
            registration is accurate.
          </p>
        </LegalSection>

        <LegalSection title="3. Acceptable Use">
          <p>You agree not to use Colbe to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Harass, threaten, or abuse other users</li>
            <li>Share illegal content or content that infringes others' rights</li>
            <li>Impersonate another person or entity</li>
            <li>Attempt to disrupt, hack, or reverse-engineer the platform</li>
            <li>Circumvent moderation or safety features</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Accounts & Security">
          <p>
            You are responsible for maintaining the confidentiality of your account
            credentials and for all activity that occurs under your account.
          </p>
        </LegalSection>

        <LegalSection title="5. Lunes & Purchases">
          <p>
            Lunes is a virtual, cosmetic-only currency with no real-world monetary value.
            Lunes cannot be exchanged for cash, transferred between accounts, or refunded
            except where required by law.
          </p>
        </LegalSection>

        <LegalSection title="6. Termination">
          <p>
            We may suspend or terminate your account if you violate these Terms or engage
            in conduct that harms Colbe or its users.
          </p>
        </LegalSection>

        <LegalSection title="7. Changes to These Terms" isLast>
          <p>
            We may update these Terms from time to time. Continued use of Colbe after
            changes take effect constitutes acceptance of the revised Terms.
          </p>
        </LegalSection>
      </div>
    </div>
  );
}