import { useState } from "react";
import HeroHeader from "@/components/HeroHeader";
import BrandSoulSection from "@/components/BrandSoulSection";
import AdSettingsSection from "@/components/AdSettingsSection";
import MagicBoxSection from "@/components/MagicBoxSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 space-y-16">
        <HeroHeader />
        <BrandSoulSection />
        <AdSettingsSection />
        <MagicBoxSection />
      </div>
    </div>
  );
};

export default Index;
