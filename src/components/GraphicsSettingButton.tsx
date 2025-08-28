import { useLingui } from "@lingui/react/macro";

import {
  type AvailableButtonVariants,
  buttonVariants,
} from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import {
  AVAILABLE_GRAPHICS_SETTINGS,
  useSettingsContext,
} from "@/contexts/SettingsContext";
import { cn } from "@/lib/utils";

type GraphicsSettingButtonProps = {
  buttonClassName?: string;
  buttonVariant?: AvailableButtonVariants;
};

function GraphicsSettingButton({
  buttonClassName,
  buttonVariant = "secondary",
}: GraphicsSettingButtonProps) {
  const { t } = useLingui();
  const { graphicsPresetValue, graphicsPresetIcon, dispatch } =
    useSettingsContext();

  function handleSetGraphicsSettings(newValue: string) {
    dispatch({
      type: "settings/setGraphicsSettings",
      payload: newValue,
    });
    dispatch({ type: "state/save" });
  }

  return (
    <Select onValueChange={handleSetGraphicsSettings}>
      <SelectTrigger
        iconClassName="hidden"
        className={cn(
          buttonVariants({
            variant: buttonVariant,
            size: "icon",
            className: buttonClassName,
          })
        )}
      >
        {graphicsPresetIcon}
      </SelectTrigger>
      <SelectContent align="center">
        <SelectGroup>
          <SelectLabel>{t`Graphics settings`}</SelectLabel>

          {/* TODO: LOop over */}
          {/* High graphics */}
          <SelectItem
            key={AVAILABLE_GRAPHICS_SETTINGS.high.graphicsPresetValue}
            value={AVAILABLE_GRAPHICS_SETTINGS.high.graphicsPresetValue}
            className={`justify-end focus-visible:ring-foreground ${
              AVAILABLE_GRAPHICS_SETTINGS.high.graphicsPresetValue ===
              graphicsPresetValue
                ? "bg-[color-mix(in_oklab,var(--color-primary)_50%,transparent)!important]"
                : undefined
            }`}
          >
            <AVAILABLE_GRAPHICS_SETTINGS.high.GraphicsPresetLabel />{" "}
            {AVAILABLE_GRAPHICS_SETTINGS.high.graphicsPresetIcon}
          </SelectItem>

          {/* Low graphics */}
          <SelectItem
            key={AVAILABLE_GRAPHICS_SETTINGS.low.graphicsPresetValue}
            value={AVAILABLE_GRAPHICS_SETTINGS.low.graphicsPresetValue}
            className={`justify-end focus-visible:ring-foreground ${
              AVAILABLE_GRAPHICS_SETTINGS.low.graphicsPresetValue ===
              graphicsPresetValue
                ? "bg-[color-mix(in_oklab,var(--color-primary)_50%,transparent)!important]"
                : undefined
            }`}
          >
            <AVAILABLE_GRAPHICS_SETTINGS.low.GraphicsPresetLabel />{" "}
            {AVAILABLE_GRAPHICS_SETTINGS.low.graphicsPresetIcon}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default GraphicsSettingButton;
