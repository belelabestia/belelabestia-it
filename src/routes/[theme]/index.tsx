import { component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { getTheme } from "~/utils/getTheme";
import ProfilePicture from "$/profile-pic.jpg?jsx";
import Title from "@/title.md";
import Toc from "@/toc.md";
import Info from "@/info.md";
import AboutMe from "@/about-me.md";
import DeveloperCareer from "@/developer-career.mdx";
import Skills from "@/skills.mdx";
import Channels from "@/channels.md";
import ThemeSwitch from "@/theme-switch.md";
import BackToTop from "@/back-to-top.md";

export const onGet: RequestHandler = ({ url, redirect }) => {
  if (!["/light/", "/dark/"].includes(url.pathname))
    throw redirect(302, "/dark/");
};

export default component$(() => {
  const loc = useLocation();
  const theme = getTheme(loc.params);

  return (
    <div class={theme}>
      <div class="grid pad cover">
        <ProfilePicture class="image" />
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
