import { MarketingNavbar } from "./src/components/marketing/navbar";
import { MarketingHero } from "./src/components/marketing/hero";
import { HowItWorks } from "./src/components/marketing/how-it-works";
import { MarketingFeatures } from "./src/components/marketing/features";
import { MarketingCta } from "./src/components/marketing/cta";
import { MarketingFooter } from "./src/components/marketing/footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-background">
      <MarketingNavbar />
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