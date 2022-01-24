<script lang="ts">
  import { storedFile } from "./stores";
  import SvelteMarkdown from "svelte-markdown";

  const file = (async () => {
    const response = await fetch("http://localhost:3000/" + $storedFile.path);
    return response.text();
  })();
</script>

{#await file then source}
  <SvelteMarkdown {source} />
{/await}

<style>
</style>
