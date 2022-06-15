import { Observable } from "rxjs";

import { ThemeType } from "../enums/themeType";
import { Theme } from "../services/theming/theme";

export abstract class ThemingService {
  theme$: Observable<Theme>;
  monitorThemeChanges: () => Promise<void>;
  updateSystemTheme: (systemTheme: ThemeType) => void;
  updateConfiguredTheme: (theme: ThemeType) => Promise<void>;
}
