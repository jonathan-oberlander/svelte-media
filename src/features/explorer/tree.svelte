<script lang="ts">
  import Folder from "./folder.svelte";
  import { treeStore } from "./stores";
</script>

<div class="container">
  <Folder name="Home" files={$treeStore} expanded />
</div>

<style>
  .container {
    border-right: 1px solid black;
    width: 15em;
    height: 15em;
    overflow: auto;
  }
</style>
