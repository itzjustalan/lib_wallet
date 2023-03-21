<script lang="ts">
    import { onMount } from "svelte";
    import { app } from "$lib/stores/app";
    import Item from "$lib/widgets/drawer/Item.svelte";
    import { transactionService } from "$lib/services/transaction.service";
    import type { Transaction } from "$lib/models/transaction";

    let transactions: Transaction[] = [];

    onMount(async () => {
        await fetchalltransactions();
    });

    const fetchalltransactions = async () => {
        const result = await transactionService.findAll();
        if (result instanceof Error) alert(result.message);
        else transactions = result;
        transactions = transactions.filter(v => v.accountID === $app.account?.id);
    };
</script>

<div class="page">
    <div class="page-title">Transactions</div>

    {#if $app.account}
        selected account: {$app.account.name} Account<br />
    {/if}

    {#if !transactions.length}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => app.navto("new-transaction")} class="link">
            <u> add new transaction!! </u>
        </div>
    {/if}

    {#each transactions as transaction}
        <Item
            text={`${transaction.amount} - ${transaction.description}`}
            onclick={() => {}}
        />
    {/each}
    <br />
</div>

<style>
    .link {
        cursor: pointer;
        color: var(--link-visited);
    }
</style>
