<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import { accountService } from "$lib/services/account.service";
  import type { Account } from "$lib/models/account";
    import { app } from "$lib/stores/app";
    import { base } from "$app/paths";
    import Item from "$lib/widgets/drawer/Item.svelte";

  let accountName: string;
  let accounts: Account[] = [];
  const createBankAcc = async () => {
    if (!accountName) alert("enter an account name");
    await accountService.createNew(accountName);
    await fetchaccs();
  };

  if (browser && !("indexedDB" in window)) {
    alert("This browser doesn't support IndexedDB");
  }

  onMount(async () => {
    await fetchaccs();
  });

  const fetchaccs = async () => {
    const result = await accountService.findAll();
    if (result instanceof Error) alert(result.message);
    else accounts = result;
    if (accounts.length) app.setAccount(accounts[0]);
  }
</script>

<div class="page">
<div class="page-title">Accounts</div>

{#if $app.account}
  selected account: {$app.account.name} Account<br>
{/if}

{#if !accounts.length}
  <a href="{base}/accounts/new">create new bank account!! </a>
{/if}

{#each accounts as account}
  <Item text={account.name} onclick={() => app.setAccount(account)} />
{/each}
<br>

</div>
