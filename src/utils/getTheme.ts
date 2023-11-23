import type { RouteLocation } from "@builder.io/qwik-city";

export const getTheme = (query: RouteLocation["params"]): "theme dark" | "theme light" =>
  query["theme"] == "light" ? "theme light" : "theme dark";
