import HeroSections from "@/components/frontend/hero-section";
import LogoCloud from "@/components/frontend/logo-cloud";

import { DashboardPreview } from "@/components/frontend/dashboard-preview";
import GridFeaturesss from "@/components/frontend/grid-features";
import Pricing from "@/components/frontend/pricing";
import { TabbedFeatures } from "@/components/frontend/tabbed-features";

export default function Home() {
  return (
    <main>
      <HeroSections />;
      <LogoCloud />
      <DashboardPreview />
      <GridFeaturesss />
      <TabbedFeatures />
      <Pricing />
    </main>
  );
}
