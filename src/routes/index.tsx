import type { FunctionComponent} from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { useTheme } from "~/utils/getTheme";
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

interface Article {
  id?: string;
  component: FunctionComponent;
}

const articles: Article[] = [
  {
    component: Info,
  },
  {
    id: "about-me",
    component: AboutMe,
  },
  {
    id: "developer-career",
    component: DeveloperCareer,
  },
  {
    id: "skills",
    component: Skills,
  },
  {
    id: "channels",
    component: Channels,
  },
];

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
        {articles.map((a) => (
          <>
            <hr id={a.id} />
            <div class="width">
              <a.component />
            </div>
          </>
        ))}
        <hr />
      </div>
      <div class="end grid">
        <BackToTop />
      </div>
    </div>
  );
});
