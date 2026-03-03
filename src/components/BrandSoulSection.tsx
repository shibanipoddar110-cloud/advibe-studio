import { useState } from "react";
import { Globe, Instagram, Sparkles, Palette, Type, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const BrandSoulSection = () => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [instagramHandle, setInstagramHandle] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setAnalysisComplete(false);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  return (
    <section className="glass-card p-8 space-y-6 section-fade-in" style={{ animationDelay: "0.15s" }}>
      <div className="space-y-1">
        <h2 className="text-2xl font-display font-semibold text-foreground">Brand Soul</h2>
        <p className="text-sm text-muted-foreground">Let us understand your brand's DNA</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Website URL"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            className="pl-10 bg-secondary/50 border-border/50 focus-visible:ring-primary/50"
          />
        </div>
        <div className="relative">
          <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="@instagram_handle"
            value={instagramHandle}
            onChange={(e) => setInstagramHandle(e.target.value)}
            className="pl-10 bg-secondary/50 border-border/50 focus-visible:ring-primary/50"
          />
        </div>
      </div>

      <Button
        onClick={handleAnalyze}
        disabled={isAnalyzing}
        className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-opacity"
      >
        {isAnalyzing ? (
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 animate-spin" />
            Scanning aesthetics, colors, and tone...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Analyze Brand Vibe
          </span>
        )}
      </Button>

      {analysisComplete && (
        <div className="glass-card p-5 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="text-sm font-medium text-foreground flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            Brand Vibe Detected
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Palette className="w-3 h-3" /> Colors
              </div>
              <div className="flex gap-1.5">
                <div className="w-6 h-6 rounded-full bg-primary" />
                <div className="w-6 h-6 rounded-full bg-accent" />
                <div className="w-6 h-6 rounded-full bg-foreground/80" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Type className="w-3 h-3" /> Tone
              </div>
              <p className="text-sm text-foreground font-medium">Bold & Modern</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Sparkles className="w-3 h-3" /> Style
              </div>
              <p className="text-sm text-foreground font-medium">Minimalist</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BrandSoulSection;
