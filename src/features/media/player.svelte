<script lang="ts">
  import Blue from "./blue.svelte";
  import Green from "./green.svelte";
  import Red from "./red.svelte";
  import { fileStore, store } from "./stores";

  const options = { gif: Blue, md: Green, pdf: Red };

  $: type = $store.name.slice($store.name.lastIndexOf(".") + 1);
  $: file = Object.values($fileStore).find((o) => o.name === $store.name);
</script>

<div>
  <pre>
    {JSON.stringify(file, null, 3)}
  </pre>
  <svelte:component this={options[type]} />
</div>
