<script lang="ts">
  import Directory from "./directory.svelte";
  import type { Level } from "../../types";

  const fetchFiles = async (): Promise<Level> => {
    const response = await fetch("http://localhost:3000/directories");
    return await response.json();
  };
</script>

<div class="container">
  {#await fetchFiles()}
    <p>...waiting</p>
  {:then level}
    <Directory {level} />
  {:catch error}
    <p>An error occurred!</p>
  {/await}
</div>

<style>
  .container {
    border-right: 1px solid #aeaeae;
    width: 15em;
    overflow: auto;
    position: fixed;
    height: 100%;
  }
</style>
