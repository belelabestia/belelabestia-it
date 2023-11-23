import { $, component$ } from "@builder.io/qwik";
import { useTheme } from "~/utils/useTheme";
import ProfilePicture from "$/profile-pic.jpg?jsx";
import Title from "@/title.md";
import Toc from "@/toc.md";
import Info from "@/info.md";
import AboutMe from "@/about-me.md";
import DeveloperCareer from "@/developer-career/index.mdx";
import Skills from "@/skills.mdx";
import Channels from "@/channels.md";
import ThemeSwitch from "@/theme-switch.md";
import BackToTop from "@/back-to-top.md";
import Article from "@/article";

export default component$(() => {
  const theme = useTheme();

  return (
    <div class={theme}>
      <div class="grid pad cover">
        <ProfilePicture class="image" />
        <Title />
        <Toc />
        <ThemeSwitch />
      </div>
      <div class="grid pad">
        <Article Component$={$(Info)} />
        <Article Component$={$(AboutMe)} id="about-me" />
        <Article Component$={$(DeveloperCareer)} id="developer-career" />
        <Article Component$={$(Skills)} id="skills" />
        <Article Component$={$(Channels)} id="channels" />
        <hr />
      </div>
      <div class="end grid">
        <BackToTop />
      </div>
    </div>
  );
});
