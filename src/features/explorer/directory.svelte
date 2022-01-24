<script lang="ts">
  import File from "./file.svelte";
  import type { Level } from "./stores";

  export let expanded = false;
  export let level: Level;

  function toggle() {
    expanded = !expanded;
  }
</script>

<span class:expanded on:click={toggle}>{level.name}</span>

{#if expanded}
  <ul>
    {#each level.children as child}
      <li>
        {#if child.children}
          <svelte:self level={child} />
        {:else}
          <File file={child} />
        {/if}
      </li>
    {/each}
  </ul>
{/if}

<style>
  span {
    padding: 0 0 0 1.5em;
    background: url(/icons/folder.png) 0 0.1em no-repeat;
    background-size: 1em 1em;
    cursor: pointer;
  }

  span:hover {
    font-style: oblique;
    /* font-weight: bold; */
  }

  .expanded {
    background-image: url(/icons/folder-open.png);
  }

  ul {
    padding: 0.2em 0 0 0.5em;
    margin: 0 0 0 0.5em;
    list-style: none;
    border-left: 1px solid #eee;
  }

  li {
    padding: 0.2em 0;
  }
</style>
