import type { FunctionComponent } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

interface Props {
  id?: string;
  Component$: FunctionComponent;
}

export default component$(({ id, Component$: Component$ }: Props) => {
  return (
    <>
      <hr id={id} />
      <div class="width">
        <Component$ />
      </div>
    </>
  );
});
