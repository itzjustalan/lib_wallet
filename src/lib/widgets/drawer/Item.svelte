<script lang="ts">
    export let text: string;
    export let onclick: Function;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="item" on:click={() => onclick()}>
    {text}
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
</style>