<script lang="ts">
    import Header from "./Header.svelte";
    import "./styles.css";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="An offline first libre money wallet." />
</svelte:head>

<div class="app">
    <Header />
    <main><slot /></main>
    <footer>sett aano</footer>
</div>
