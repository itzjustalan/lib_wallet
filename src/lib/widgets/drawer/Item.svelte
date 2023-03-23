<script lang="ts">
    import type { Icons } from "$lib/icons";

    export let icon: Icons | undefined = undefined;
    export let iconOnly = false;
    export let text: string;
    export let onclick: Function;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="item" on:click={() => onclick()}>
    <span class="icon">
        {#if icon}<iconify-icon icon={icon} />{/if}
    </span><span class="text">
        {#if !iconOnly}{text}{/if}
    </span>
</div>

<style>
    .item {
        margin: 1vw;
        padding: 1vw;
        background-color: var(--item-bg);
        border-radius: 1vw;
        transition: 900ms;
        /* border-top: 1px solid var(--ln-cl); */
    }
    .item:hover {
        background-color: var(--item-bg-hv);
    }
    .icon, .text {
        vertical-align: text-top;
        display: inline-block;
        /* font-size: 1.5rem; */
    }
    .icon {
        /* font-size: 1rem; */
        margin-right: .5vw;
    }
</style>