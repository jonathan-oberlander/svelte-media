<script lang="ts">
  import FolderInput from "./features/explorer/folderInput.svelte";
  import Tree from "./features/explorer/tree.svelte";
  import Player from "./features/media/player.svelte";
</script>

<main>
  <!-- <h1>Hello {name}!</h1>
  <p>Choose a folder to explore</p> -->
  <FolderInput />
  <Tree />
  <Player />
</main>

<style>
  main {
    /* text-align: center; */
    padding: 1em;
    max-width: 240px;
    /* margin: 0 auto; */
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
