import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const platforms = [
  { value: "instagram-reels", label: "Instagram Reels" },
  { value: "facebook-feed", label: "Facebook Feed" },
  { value: "youtube-shorts", label: "YouTube Shorts" },
];

const durations = ["15s", "30s", "Other"];

const AdSettingsSection = () => {
  const [platform, setPlatform] = useState("instagram-reels");
  const [duration, setDuration] = useState("15s");
  const [customDuration, setCustomDuration] = useState("");

  return (
    <section className="glass-card p-8 space-y-6 section-fade-in" style={{ animationDelay: "0.3s" }}>
      <div className="space-y-1">
        <h2 className="text-2xl font-display font-semibold text-foreground">Ad Settings</h2>
        <p className="text-sm text-muted-foreground">Configure your ad format</p>
      </div>

      {/* Platform */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Platform</label>
        <ToggleGroup
          type="single"
          value={platform}
          onValueChange={(v) => v && setPlatform(v)}
          className="flex flex-wrap gap-2 justify-start"
        >
          {platforms.map((p) => (
            <ToggleGroupItem
              key={p.value}
              value={p.value}
              className="px-4 py-2 rounded-lg border border-border/50 bg-secondary/30 text-sm data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary/50 transition-all"
            >
              {p.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      {/* Duration */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Duration</label>
        <div className="flex items-center gap-2 flex-wrap">
          <ToggleGroup
            type="single"
            value={duration}
            onValueChange={(v) => v && setDuration(v)}
            className="flex gap-2"
          >
            {durations.map((d) => (
              <ToggleGroupItem
                key={d}
                value={d}
                className="px-4 py-2 rounded-lg border border-border/50 bg-secondary/30 text-sm data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary/50 transition-all"
              >
                {d}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>

          {duration === "Other" && (
            <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
              <Input
                type="number"
                placeholder="Seconds"
                value={customDuration}
                onChange={(e) => setCustomDuration(e.target.value)}
                className="w-24 bg-secondary/50 border-border/50"
              />
              <span className="text-sm text-muted-foreground">sec</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdSettingsSection;
