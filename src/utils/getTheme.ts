import { useLocation } from "@builder.io/qwik-city";

export const useTheme = () => {
  const loc = useLocation();
  return `theme ${loc.url.searchParams.get("theme") ?? "light"}`;
};
