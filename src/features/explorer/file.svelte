<script lang="ts">
  import { storedFile } from "../media/stores";
  import type { Level } from "../../types";

  export let file: Omit<Level, "children">;

  $: type = file.name.slice(file.name.lastIndexOf(".") + 1);
</script>

<span
  style="background-image: url(/icons/{type}.png)"
  on:click={() => ($storedFile = file)}
>
  {file.name}
</span>

<style>
  span {
    padding: 0 0 0 1.5em;
    background: 0 0.1em no-repeat;
    background-size: 1em 1em;
    cursor: pointer;
  }

  span:hover {
    font-style: oblique;
  }
</style>
