<script lang="ts">
  import Tree from "./features/explorer/tree.svelte";
  import Player from "./features/media/player.svelte";
</script>

<main>
  <Tree />
  <Player />
</main>

<style>
  main {
    padding: 1em;
    max-width: 240px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
