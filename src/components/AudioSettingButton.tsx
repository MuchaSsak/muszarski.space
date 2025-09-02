import { useLingui } from "@lingui/react/macro";

import { type AvailableButtonVariants, Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { useSettingsContext } from "@/contexts/SettingsContext";
import { cn } from "@/lib/utils";

type AudioSettingButtonProps = {
  buttonClassName?: string;
  buttonVariant?: AvailableButtonVariants;
};

function AudioSettingButton({
  buttonClassName,
  buttonVariant = "secondary",
}: AudioSettingButtonProps) {
  const { t } = useLingui();
  const { dispatch, isAudioEnabled, audioVolume } = useSettingsContext();

  function handleSetIsAudioEnabled() {
    dispatch({ type: "settings/setIsAudioEnabled", payload: !isAudioEnabled });
    dispatch({ type: "state/save" });
  }

  function handleSetAudioVolume(newVolume: number) {
    dispatch({ type: "settings/setAudioVolume", payload: newVolume });
    dispatch({ type: "state/save" });
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant={buttonVariant} className={buttonClassName}>
          {(!isAudioEnabled || audioVolume === 0) && "🔇"}
          {isAudioEnabled && audioVolume > 0 && audioVolume < 0.5 && "🔉"}
          {isAudioEnabled && audioVolume >= 0.5 && "🔊"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="text-sm">
        {/* Label */}
        <h6 className="text-muted-foreground text-xs">{t`Audio settings`}</h6>

        {/* Enable sounds checkbox */}
        <div className="flex items-center gap-2 py-2">
          <Checkbox
            checked={isAudioEnabled}
            onClick={handleSetIsAudioEnabled}
            id="enable-sounds-checkbox"
          />
          <label htmlFor="enable-sounds-checkbox">{t`Enable sounds`}</label>
        </div>

        {/* Volume slider */}
        <span>
          {t`Volume`} <span>🔊</span>
        </span>
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "text-xs transition-opacity",
              isAudioEnabled ? "opacity-100" : "opacity-50"
            )}
          >
            {Math.round(audioVolume * 100)}%
          </span>
          <Slider
            onValueChange={([newValue]) => handleSetAudioVolume(newValue)}
            defaultValue={[audioVolume]}
            min={0}
            step={0.01}
            max={1}
            disabled={!isAudioEnabled}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default AudioSettingButton;
