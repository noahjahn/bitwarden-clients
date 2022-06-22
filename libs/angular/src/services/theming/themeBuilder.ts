import { ThemeType } from "@bitwarden/common/enums/themeType";

import { Theme } from "./theme";

export class ThemeBuilder implements Theme {
  readonly configuredTheme: ThemeType;
  readonly systemTheme: ThemeType;

  get effectiveTheme(): ThemeType {
    return this.configuredTheme != ThemeType.System ? this.configuredTheme : this.systemTheme;
  }

  constructor(themeSetting: ThemeType, systemTheme: ThemeType) {
    this.configuredTheme = themeSetting;
    this.systemTheme = systemTheme;
  }

  updateSystemTheme(systemTheme: ThemeType): ThemeBuilder {
    return new ThemeBuilder(this.configuredTheme, systemTheme);
  }

  updateConfiguredTheme(configuredTheme: ThemeType): ThemeBuilder {
    return new ThemeBuilder(configuredTheme, this.systemTheme);
  }
}
