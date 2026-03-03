import { useState } from "react";
import { Check, RefreshCw, Clapperboard, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScriptOption {
  id: number;
  title: string;
  subtitle: string;
  hook: string;
  body: string;
  cta: string;
}

const scripts: ScriptOption[] = [
  {
    id: 1,
    title: "Option 1",
    subtitle: "The Fast Hook",
    hook: "Bold visual slam — product in motion, impossible to scroll past.",
    body: "Quick-cut montage showcasing key features with kinetic text overlays and punchy sound design.",
    cta: "Logo reveal with a limited-time offer and swipe-up prompt.",
  },
  {
    id: 2,
    title: "Option 2",
    subtitle: "The Storyteller",
    hook: "Open on a relatable moment — someone struggling with the problem your product solves.",
    body: "Cinematic transition into the product experience. Show transformation through authentic, lifestyle-driven footage.",
    cta: "Warm close with social proof and a clear call-to-action.",
  },
  {
    id: 3,
    title: "Option 3",
    subtitle: "The Problem/Solution",
    hook: "\"Ever felt like [pain point]?\" — direct-to-camera or text-on-screen question.",
    body: "Side-by-side before/after. Demonstrate the product solving the problem with clean, satisfying visuals.",
    cta: "End with urgency — countdown or limited availability with shop-now button.",
  },
];

interface Props {
  onRegenerate: () => void;
}

const ScriptSelectionStage = ({ onRegenerate }: Props) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelectedId(id);
  };

  const selectedScript = scripts.find((s) => s.id === selectedId);

  // Split view after selection
  if (selectedScript) {
    return (
      <div className="animate-in fade-in duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Selected Script */}
          <div className="glass-card p-6 space-y-5">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <h3 className="font-display font-semibold text-foreground text-lg">
                {selectedScript.subtitle}
              </h3>
            </div>

            <ScriptBreakdown script={selectedScript} />

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedId(null)}
              className="text-muted-foreground hover:text-foreground"
            >
              ← Back to options
            </Button>
          </div>

          {/* Right: Video Trigger */}
          <div className="glass-card p-6 flex flex-col items-center justify-center space-y-6 min-h-[300px]">
            <div className="w-full aspect-video rounded-lg bg-secondary/30 border border-border/30 flex items-center justify-center">
              <Film className="w-12 h-12 text-muted-foreground/40" />
            </div>

            <Button
              size="lg"
              className="w-full glow-button pulse-glow bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-semibold text-base h-12 rounded-xl"
            >
              <Clapperboard className="w-5 h-5 mr-2" />
              🎬 Generate Video Assets
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Button
            variant="ghost"
            onClick={onRegenerate}
            className="text-muted-foreground hover:text-foreground"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Regenerate Scripts
          </Button>
        </div>
      </div>
    );
  }

  // Script cards selection view
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-1">
        <h3 className="text-xl font-display font-semibold text-foreground">Choose Your Script</h3>
        <p className="text-sm text-muted-foreground">Pick the narrative style that fits your brand</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {scripts.map((script) => (
          <div
            key={script.id}
            className="glass-card p-5 space-y-4 hover:border-primary/30 transition-all duration-300 group"
          >
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{script.title}</p>
              <h4 className="font-display font-semibold text-foreground mt-1">{script.subtitle}</h4>
            </div>

            <ScriptBreakdown script={script} />

            <Button
              onClick={() => handleSelect(script.id)}
              variant="outline"
              className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Select This Script
            </Button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button
          variant="ghost"
          onClick={onRegenerate}
          className="text-muted-foreground hover:text-foreground"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Regenerate Scripts
        </Button>
      </div>
    </div>
  );
};

const ScriptBreakdown = ({ script }: { script: ScriptOption }) => (
  <div className="space-y-3">
    <div className="space-y-1">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">Hook · 0–3s</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{script.hook}</p>
    </div>
    <div className="space-y-1">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">Body · 3–12s</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{script.body}</p>
    </div>
    <div className="space-y-1">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-foreground/70">CTA · 12–15s</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{script.cta}</p>
    </div>
  </div>
);

export default ScriptSelectionStage;
