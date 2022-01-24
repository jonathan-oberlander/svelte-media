<script lang="ts">
  import { storedFile, filePath } from "./stores";
</script>

<img
  src={$filePath}
  alt={$storedFile.name}
  class="responsive"
/>

<style>
  .responsive {
    width: 100%;
    max-width: 400px;
    height: auto;
  }
</style>
