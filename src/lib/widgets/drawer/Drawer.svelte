<script lang="ts">
    import { dev } from "$app/environment";
    import { app } from "$lib/stores/app";
    import type { pagenames } from "$lib/stores/app";
    import { Theme, theme } from "$lib/stores/theme";
    import Item from "./Item.svelte";
    import { createEventDispatcher } from "svelte";
    import { Icons } from "$lib/icons";

    export let slim: boolean = false;
    const dispatch = createEventDispatcher();

    const navto = (page: pagenames) => () => {
        dispatch("nav", { page });
        app.navto(page);
    };
</script>

<aside>
    <nav class="drawer">
        {#if !slim}<div class="heading">Drawer {$app.account?.name}</div>{/if}
        <!-- <h1 class="heading">Drawer</h1> -->
        <Item
            text="Dashboard"
            iconOnly={slim}
            onclick={navto("dash")}
            icon={Icons.material_symbols_space_dashboard}
        />
        <Item
            text="Home"
            iconOnly={slim}
            onclick={navto("home")}
            icon={Icons.material_symbols_home_rounded}
        />
        <Item
            text="Test"
            iconOnly={slim}
            onclick={navto("test")}
            icon={Icons.material_symbols_fireplace_rounded}
        />
        <Item
            text={"Accounts"}
            iconOnly={slim}
            onclick={navto("accounts")}
            icon={Icons.material_symbols_account_balance_wallet}
        />
        <!-- <Item text={"New Account"} onclick={navto("new-account")} /> -->
        <Item
            text={"Transactions"}
            iconOnly={slim}
            onclick={navto("transactions")}
            icon={Icons.material_symbols_compare_arrows_rounded}
        />
        <Item
            text={"New Transaction"}
            iconOnly={slim}
            onclick={navto("new-transaction")}
            icon={Icons.material_symbols_new_label_outline_rounded}
        />
        <!-- {#if dev}
            <Item text={"developer"} onclick={navto("debug")} />
        {/if} -->
        <Item
            text={"developer"}
            iconOnly={slim}
            onclick={navto("debug")}
            icon={Icons.material_symbols_developer_mode_rounded}
        />
        <Item
            iconOnly={slim}
            onclick={theme.toggle}
            text={"theme: " + $theme}
            icon={$theme !== Theme.Dark
                ? Icons.material_symbols_light_mode
                : Icons.material_symbols_dark_mode_rounded}
        />
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
