import { MarketingNavbar } from "@/components/marketing/navbar";
import { MarketingHero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { MarketingFeatures } from "@/components/marketing/features";
import { MarketingCta } from "@/components/marketing/cta";
import { MarketingFooter } from "@/components/marketing/footer";
import { SignupBanner } from "@/components/marketing/signup-banner";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-background">
      <MarketingNavbar />
      <SignupBanner />
      <main className="flex w-full flex-col items-center">
        <MarketingHero />
        <HowItWorks />
        <MarketingFeatures />
        <MarketingCta />
      </main>
      <MarketingFooter />
    </div>
  );
}