"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme/theme-provider";

export function ReduxProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Provider store={store}>
        <TooltipProvider>{children}</TooltipProvider>
      </Provider>
    </ThemeProvider>
  );
}
