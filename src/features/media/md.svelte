<script lang="ts">
  import { filePath } from "./stores";
  import SvelteMarkdown from "svelte-markdown";

  const file = async () => {
    const response = await fetch($filePath);
    return response.text();
  };
</script>

{#await file() then source}
  <SvelteMarkdown {source} />
{/await}

<style>
</style>
