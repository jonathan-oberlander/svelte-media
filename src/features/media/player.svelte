<script lang="ts">
  import Image from "./image.svelte";
  import Md from "./md.svelte";
  import PDF from "./pdf.svelte";
  import { storedFile } from "./stores";

  const component = (type: string) => {
    switch (type) {
      case "gif":
      case "jpeg":
      case "png":
        return Image;
      case "md":
        return Md;
      case "pdf":
        return PDF;
      default:
        return undefined;
    }
  };

  $: type = $storedFile?.name.slice($storedFile?.name.lastIndexOf(".") + 1);
</script>

<div class="container">
  <svelte:component this={component(type)} />
</div>

<style>
  .container {
    padding: 1em;
    max-width: 80%;
    margin-left: 15em;
    display: block;
  }
</style>
