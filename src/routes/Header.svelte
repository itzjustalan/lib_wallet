<script lang="ts">
    import { theme } from "$lib/stores/theme";
</script>

<header>
    <button on:click={theme.toggle}>{$theme}</button>
</header>