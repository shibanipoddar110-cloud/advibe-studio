import { useState } from "react";
import { Wand2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ScriptSelectionStage from "@/components/ScriptSelectionStage";

const MagicBoxSection = () => {
  const [prompt, setPrompt] = useState("");
  const [showScripts, setShowScripts] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setShowScripts(false);
    setTimeout(() => {
      setIsGenerating(false);
      setShowScripts(true);
    }, 2000);
  };

  const handleRegenerate = () => {
    setShowScripts(false);
    handleGenerate();
  };

  return (
    <div className="space-y-8">
      <section className="glass-card p-8 space-y-6 section-fade-in" style={{ animationDelay: "0.45s" }}>
        <div className="space-y-1">
          <h2 className="text-2xl font-display font-semibold text-foreground">The Magic Box</h2>
          <p className="text-sm text-muted-foreground">Describe what you're selling and we'll handle the rest</p>
        </div>

        <Textarea
          placeholder="What are we selling today?"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[140px] bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground resize-none focus-visible:ring-primary/50 text-base"
        />

        <Button
          size="lg"
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full glow-button pulse-glow bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-semibold text-lg h-14 rounded-xl hover:opacity-95 transition-opacity"
        >
          {isGenerating ? (
            <span className="flex items-center gap-2">
              <Wand2 className="w-5 h-5 animate-spin" />
              Generating scripts...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Wand2 className="w-5 h-5" />
              Generate Ad
            </span>
          )}
        </Button>
      </section>

      {showScripts && (
        <ScriptSelectionStage onRegenerate={handleRegenerate} />
      )}
    </div>
  );
};

export default MagicBoxSection;
