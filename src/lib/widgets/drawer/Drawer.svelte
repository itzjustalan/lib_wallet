<script>
    import { dev } from "$app/environment";
import { base } from "$app/paths";
    import { app } from "$lib/stores/app";
    import { theme } from "$lib/stores/theme";
    import Item from "./Item.svelte";
</script>


<aside>
    <nav class="drawer">
        <div class="heading">Drawer</div>
        <!-- <h1 class="heading">Drawer</h1> -->
        <Item text={'theme: ' + $theme} onclick={theme.toggle} />
        <Item text="Home" onclick={() => window.location.replace(base + '/')} />
        <Item text="Test" onclick={() => window.location.replace(base + '/test')} />
        <Item text="Dashboard" onclick={() => window.location.replace(base + '/dash')} />
        <Item text={'Account: ' + $app.account?.name} onclick={() => window.location.replace(base + '/accounts')} />
        <Item text={'New Account'} onclick={() => window.location.replace(base + '/accounts/new')} />
            {#if dev}
                <Item text={'developer'} onclick={() => window.location.replace(base + '/debug')} />
            {/if}
        <!-- <Item text="" onclick={() => {}} /> -->
    </nav>
</aside>

<style>
    .drawer {
        width: 20vw;
        height: 100vh;
        border-right: 1px solid var(--ln-cl);
    }
    .heading {
        padding: 1vw;
        margin-top: 1vw;
        font-size: 2rem;
    }
</style>