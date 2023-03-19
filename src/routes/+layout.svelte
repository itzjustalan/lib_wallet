<script lang="ts">
    import Header from "./Header.svelte";
    import "./styles.css";
</script>

<div class="app">
    <Header />
    <main><slot /></main>
    <footer>sett aano</footer>
</div>
