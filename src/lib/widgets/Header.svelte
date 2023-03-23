<script lang="ts">
    import { Icons } from "$lib/icons";
    import Drawer from "$lib/widgets/drawer/Drawer.svelte";
    let showDrawer = false;
    const toggleDrawer = () => (showDrawer = !showDrawer);
</script>

<header>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <iconify-icon
        on:click={toggleDrawer}
        icon={showDrawer
            ? Icons.material_symbols_close_rounded
            : Icons.material_symbols_view_sidebar_rounded}
    />
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
