<script lang="ts">
    import Header from "$lib/widgets/Header.svelte";
    import Drawer from "$lib/widgets/drawer/Drawer.svelte";
    import 'iconify-icon';
    import "./styles.css";
    import { app } from "$lib/stores/app";
    import { browser } from "$app/environment";

    // const onlyIcons = (): boolean => {
    //     if (!browser) return true
    //     else return window.matchMedia("(max-width: 900px)").matches;
    // }

</script>

<!-- <div class="css-debug" /> -->
{$app.page}
<div class="app">
    <div class="header"><Header /></div>
    <div class="container">
        <!-- <div class="drawer"><Drawer slim={onlyIcons()} /></div> -->
        <div class="drawer"><Drawer /></div>
        <div class="drawer-slim"><Drawer slim={true} /></div>
        <main><slot /></main>
    </div>
    <footer>2022 foss lib_wallet</footer>
</div>

<style>
    .container {
        display: flex;
    }

    .header {
        display: none;
    }

    .drawer {
        width: 20vw;
    }

    .drawer-slim {
        width: 6vw;
        display: none;
    }

    footer {
        padding: 4px;
        width: 100vw;
        bottom: 0;
        position: fixed;
        font-style: italic;
        text-align: center;
        border-top: 1px solid var(--ln-cl);
        background-color: var(--bg-cl);
    }

    @media (max-width: 900px) {

        footer {
            display: none;
        }

        .drawer {
            display: none;
        }

        .drawer-slim {
            display: block;
        }
    }

    @media (max-width: 500px) {
        .header {
            display: block;
        }

        .drawer {
            display: none;
        }

        .drawer-slim {
            display: none;
        }
    }
</style>
