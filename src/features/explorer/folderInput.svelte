<script lang="ts">
  import { fileStore } from "../media/stores";
  import { treeStore } from "./stores";
  import { treeify } from "./treeify";

  let files: FileList;

  const handleChange = (e) => {
    let files = e.target.files;
    $fileStore = files;
    const paths = Object.values(files).map((file) => file.webkitRelativePath);
    $treeStore = treeify(paths);
  };
</script>

<div>
  <input
    on:change={handleChange}
    type="file"
    id="ctrl"
    webkitdirectory
    directory
    multiple
    bind:files
  />
</div>

<style>
</style>
