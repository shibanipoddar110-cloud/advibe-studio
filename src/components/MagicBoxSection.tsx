import { useState } from "react";
import { Wand2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const MagicBoxSection = () => {
  const [prompt, setPrompt] = useState("");

  return (
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
        className="w-full glow-button pulse-glow bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-semibold text-lg h-14 rounded-xl hover:opacity-95 transition-opacity"
      >
        <Wand2 className="w-5 h-5 mr-2" />
        Generate Ad
      </Button>
    </section>
  );
};

export default MagicBoxSection;
