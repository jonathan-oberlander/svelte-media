<script lang="ts">
  import { store } from "../media/stores";

  export let name;
  $: type = name.slice(name.lastIndexOf(".") + 1);
</script>

<span
  style="background-image: url(/icons/{type}.png)"
  on:click={() => ($store.name = name)}
>
  {name}
</span>

<style>
  span {
    padding: 0 0 0 1.5em;
    background: 0 0.1em no-repeat;
    background-size: 1em 1em;
    cursor: pointer;
  }
</style>
