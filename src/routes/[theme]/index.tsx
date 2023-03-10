import { component$ } from "@builder.io/qwik";
import { RequestHandler, useLocation } from "@builder.io/qwik-city";
import { ProfilePicture } from "@/profile-picture";
import { getTheme } from "~/utils/getTheme";
import Title from "@/title.md?inline";
import Toc from "@/toc.md?inline";
import Info from "@/info.md?inline";
import AboutMe from "@/about-me.md?inline";
import DeveloperCareer from "@/developer-career.mdx?inline";
import Skills from "@/skills.mdx?inline";
import Channels from "@/channels.md?inline";
import ThemeSwitch from "@/theme-switch.md?inline";
import BackToTop from "@/back-to-top.md?inline";

export const onGet: RequestHandler = (request) => {
  if (!["/light/", "/dark/"].includes(request.url.pathname))
    throw request.response.redirect("/dark/");
};

export default component$(() => {
  const loc = useLocation();
  const theme = getTheme(loc.params);

  return (
    <div class={theme}>
      <div class="grid pad cover">
        <ProfilePicture />
        <Title />
        <Toc />
        <ThemeSwitch />
      </div>
      <div class="grid pad">
        <hr />
        <div class="width">
          <Info />
        </div>
        <hr id="about-me" />
        <div class="width">
          <AboutMe />
        </div>
        <hr id="developer-career" />
        <div class="width">
          <DeveloperCareer />
        </div>
        <hr id="skills" />
        <div class="width">
          <Skills />
        </div>
        <hr id="channels" />
        <div class="width">
          <Channels />
        </div>
        <hr />
      </div>
      <div class="end grid">
        <BackToTop />
      </div>
    </div>
  );
});
