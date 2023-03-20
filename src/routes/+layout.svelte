<script lang="ts">
    import Header from "$lib/widgets/Header.svelte";
    import Drawer from "$lib/widgets/drawer/Drawer.svelte";
    import "./styles.css";
    
</script>

<!-- <div class="css-debug"></div> -->
<div class="app">
    <div class="header"><Header /></div>
    <div class="container">
        <div class="drawer"><Drawer /></div>
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
    }

    @media (max-width: 500px) {
        .header {
            display: block;
        }

        .drawer {
            display: none;
        }
    }
</style>
