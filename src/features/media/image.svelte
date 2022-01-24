<script lang="ts">
  import { storedFile } from "./stores";

  const baseUrl = "http://localhost:3000/";
</script>

<img
  src={baseUrl + $storedFile.path}
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
