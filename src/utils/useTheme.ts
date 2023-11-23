import { useLocation } from "@builder.io/qwik-city";

export const useTheme = () => {
  const theme = useLocation().url.searchParams.get("theme");
  return `theme ${theme ?? "system"}`;
};
