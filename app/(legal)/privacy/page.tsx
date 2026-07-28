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
        <LegalSection title="1. Information We Collect">
          <p>We collect information you provide directly, including:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Account details (username, email, birthday, gender if provided)</li>
            <li>Content you send, including messages and files</li>
            <li>Payment information when you purchase Lunes</li>
          </ul>
        </LegalSection>

        <LegalSection title="2. How We Use Your Information">
          <p>We use collected information to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Provide and maintain the platform</li>
            <li>Enforce age-based restrictions and platform safety</li>
            <li>Process purchases and prevent fraud</li>
            <li>Communicate important account or policy updates</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Message Encryption">
          <p>
            Messages sent through Colbe are encrypted in transit. We do not access the
            content of your private conversations except where required by law or to
            enforce these policies.
          </p>
        </LegalSection>

        <LegalSection title="4. Data Sharing">
          <p>
            We do not sell your personal information. We may share data with service
            providers (such as payment processors) solely to operate the platform.
          </p>
        </LegalSection>

        <LegalSection title="5. Your Rights">
          <p>
            You may request access to, correction of, or deletion of your personal data by
            contacting us through your account settings.
          </p>
        </LegalSection>

        <LegalSection title="6. Changes to This Policy" isLast>
          <p>
            We may update this Privacy Policy periodically. We will notify users of
            material changes.
          </p>
        </LegalSection>
      </div>
    </div>
  );
}