<script lang="ts">
    import Drawer from "$lib/widgets/drawer/Drawer.svelte";
    let showDrawer = false;
    const toggleDrawer = () => showDrawer = !showDrawer;
</script>

<header>
    <button on:click={toggleDrawer}>
        {#if showDrawer}
            Close
        {:else}
            Drawer
        {/if}
    </button>
</header>
{#if showDrawer}
    <div class="drawer"><Drawer on:nav={toggleDrawer} /></div>
{/if}

<style>
    header {
        height: 6vh;
        color: var(--bg-cl);
        background-color: var(--fg-cl);
    }
    .drawer {
        /* width: 50vw; */
        width: 90vw;
        /* width: 100vw; */
        position: absolute;
        z-index: 1000;
    }
</style>
