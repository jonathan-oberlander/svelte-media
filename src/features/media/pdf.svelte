<script lang="ts">
  import { storedFile } from "./stores";
  import PdfViewer from "svelte-pdf";
</script>

<PdfViewer url={"http://localhost:3000/" + $storedFile.path} />

<style>
</style>
