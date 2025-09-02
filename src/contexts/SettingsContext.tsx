import { t } from "@lingui/core/macro";
import { createContext, useContext, useEffect, useReducer } from "react";
import * as THREE from "three";

/**
 * Types
 */
type SettingsContextReducerAction = {
  type:
    | "state/load"
    | "state/save"
    | "state/reset"
    | "experience/start"
    | "experience/ignoreMobileWarning"
    | "settings/setGraphicsSettings"
    | "settings/setIsAudioEnabled"
    | "settings/setAudioVolume";
  payload?: any;
};

type AvailableGraphicsSetting = {
  graphicsPresetValue: string;
  GraphicsPresetLabel: () => React.ReactNode;
  graphicsPresetIcon: string;

  anisotropy: number;
  multisampling: number;
  antialias: boolean;
  depth: boolean;
};
type AvailableGraphicsSettings = {
  low: AvailableGraphicsSetting;
  high: AvailableGraphicsSetting;
};

type SettingsContext = AvailableGraphicsSetting & {
  toneMapping: THREE.ToneMapping;

  isAudioEnabled: boolean;
  audioVolume: number;

  hasIgnoredMobileWarning: boolean;
  hasLoaded: boolean;
  hasStartedExperience: boolean;
  dispatch: React.ActionDispatch<[action: SettingsContextReducerAction]>;
};

/**
 * Initialization
 */
export const AVAILABLE_GRAPHICS_SETTINGS: AvailableGraphicsSettings = {
  low: {
    graphicsPresetValue: "low",
    GraphicsPresetLabel: () => t`Low graphics`,
    graphicsPresetIcon: "🥔",

    anisotropy: 2,
    multisampling: 0,
    antialias: false,
    depth: false,
  },

  high: {
    graphicsPresetValue: "high",
    GraphicsPresetLabel: () => t`High graphics`,
    graphicsPresetIcon: "⚡",

    anisotropy: 8,
    multisampling: 4,
    antialias: true,
    depth: true,
  },
};

const defaultGraphicsSettings = AVAILABLE_GRAPHICS_SETTINGS.high;

const initialSettingsContext: SettingsContext = {
  ...defaultGraphicsSettings,

  toneMapping: THREE.ACESFilmicToneMapping,

  isAudioEnabled: true,
  audioVolume: 0.5,

  hasIgnoredMobileWarning: false,
  hasLoaded: false,
  hasStartedExperience: false,
  dispatch: () => {},
};

const SettingsContext = createContext<SettingsContext>(initialSettingsContext);

/**
 * Reducer
 */
function reducer(
  state: SettingsContext,
  action: SettingsContextReducerAction
): SettingsContext {
  switch (action.type) {
    case "state/load": {
      const localStorageSettings = JSON.parse(
        localStorage.getItem("settings") ?? "null"
      );

      // Set loaded settings to state
      if (localStorageSettings)
        return {
          ...state,
          ...localStorageSettings,
          hasLoaded: true,
          hasStartedExperience: false,
        };
      else return { ...state, hasLoaded: true, hasStartedExperience: false };
    }

    case "state/save": {
      localStorage.setItem("settings", JSON.stringify(state));

      return state;
    }

    case "state/reset": {
      localStorage.clear();

      return { ...initialSettingsContext };
    }

    case "experience/start": {
      return { ...state, hasStartedExperience: true };
    }

    case "experience/ignoreMobileWarning": {
      return { ...state, hasIgnoredMobileWarning: true };
    }

    case "settings/setGraphicsSettings": {
      const payload = action.payload as keyof AvailableGraphicsSettings;

      return { ...state, ...AVAILABLE_GRAPHICS_SETTINGS[payload] };
    }

    case "settings/setIsAudioEnabled": {
      const payload = action.payload as boolean;

      return { ...state, isAudioEnabled: payload };
    }

    case "settings/setAudioVolume": {
      const payload = action.payload as number;

      return { ...state, audioVolume: payload };
    }

    default: {
      throw new Error("Unrecognized SettingsContext reducer action type!");
    }
  }
}

/**
 * Context provider
 */
export function SettingsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialSettingsContext);

  // Load settings from local storage at mount
  useEffect(() => {
    dispatch({ type: "state/load" });
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

/**
 * Hook
 */
export function useSettingsContext() {
  const context = useContext(SettingsContext);
  if (context === undefined)
    throw new Error(
      "useSettingsContext was used outside of SettingsContextProvider!"
    );
  return context;
}
