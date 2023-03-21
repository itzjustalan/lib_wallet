<script lang="ts">
    import { dev } from "$app/environment";
    import { app } from "$lib/stores/app";
    import type { pagenames } from "$lib/stores/app";
    import { theme } from "$lib/stores/theme";
    import Item from "./Item.svelte";
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    const navto = (page: pagenames) => () => {
        dispatch('nav', { page });
        app.navto(page);
    }
</script>

<aside>
    <nav class="drawer">
        <div class="heading">Drawer {$app.account?.name}</div>
        <!-- <h1 class="heading">Drawer</h1> -->
        <Item text="Dashboard" onclick={navto("dash")} />
        <Item text="Home" onclick={navto("home")} />
        <Item text="Test" onclick={navto("test")} />
        <Item text={"Accounts"} onclick={navto("accounts")} />
        <!-- <Item text={"New Account"} onclick={navto("new-account")} /> -->
        <Item text={"Transactions"} onclick={navto("transactions")} />
        <Item text={"New Transaction"} onclick={navto("new-transaction")} />
        <!-- {#if dev}
            <Item text={"developer"} onclick={navto("debug")} />
        {/if} -->
        <Item text={"developer"} onclick={navto("debug")} />
        <Item text={"theme: " + $theme} onclick={theme.toggle} />
        <!-- <Item text="" onclick={() => {}} /> -->
    </nav>
</aside>

<style>
    .drawer {
        height: 100vh;
        border-right: 1px solid var(--ln-cl);
        background-color: var(--bg-cl);
    }
    .heading {
        padding: 1vw;
        margin-top: 1vw;
        font-size: 2rem;
    }
</style>
