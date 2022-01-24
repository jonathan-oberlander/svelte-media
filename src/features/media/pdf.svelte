<script lang="ts">
  import { filePath } from "./stores";
  import PdfViewer from "svelte-pdf";
</script>

<PdfViewer url={$filePath} />

<style>
</style>
