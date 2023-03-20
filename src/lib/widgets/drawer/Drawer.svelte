<script lang="ts">
    import { dev } from "$app/environment";
    import { base } from "$app/paths";
    import { app } from "$lib/stores/app";
    import type { pagenames } from "$lib/stores/app";
    import { theme } from "$lib/stores/theme";
    import Item from "./Item.svelte";

    const navto = (page: pagenames) => () => app.navto(page);
</script>

<aside>
    <nav class="drawer">
        <div class="heading">Drawer {$app.account?.name}</div>
        <!-- <h1 class="heading">Drawer</h1> -->
        <Item text={"theme: " + $theme} onclick={theme.toggle} />
        <Item text="Home" onclick={navto("home")} />
        <Item text="Test" onclick={navto("test")} />
        <Item text="Dashboard" onclick={navto("dash")} />
        <Item text={"Accounts"} onclick={navto("accounts")} />
        <Item text={"New Account"} onclick={navto("new-account")} />
        {#if dev}
            <Item text={"developer"} onclick={navto("debug")} />
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
