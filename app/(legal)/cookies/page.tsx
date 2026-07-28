import { LegalSection } from "@/components/legal/legal-section";
import { LastUpdatedBadge } from "@/components/legal/last-updated-badge";

export default function CookiesPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Cookie Policy</h1>
        <LastUpdatedBadge date="July 28, 2026" />
      </div>

      <div className="space-y-8">
        <LegalSection title="1. What Are Cookies">
          <p>
            Cookies are small text files stored on your device that help websites function
            and remember information about your visit.
          </p>
        </LegalSection>

        <LegalSection title="2. Cookies We Use">
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Essential cookies</strong> — required for login sessions and core
              functionality
            </li>
            <li>
              <strong>Preference cookies</strong> — remember settings like theme
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Managing Cookies" isLast>
          <p>
            You can control cookies through your browser settings. Disabling essential
            cookies may prevent Colbe from functioning correctly.
          </p>
        </LegalSection>
      </div>
    </div>
  );
}