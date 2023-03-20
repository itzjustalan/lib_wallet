<script lang="ts">
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  import { browser } from "$app/environment";
  import { accountService } from "$lib/services/account.service";
    import type { Account } from "$lib/models/account";

  let accountName: string;
  let accounts: Account[] = [];
  const createBankAcc = () => {
    if (!accountName) alert("enter an account name");
    accountService.createNew(accountName);
  };

  if (browser && !("indexedDB" in window)) {
    alert("This browser doesn't support IndexedDB");
  }

  onMount(async () => {
    const result = await accountService.findAll();
    if (result instanceof Error) alert(result.message);
    else accounts = result;
  });
</script>

<h1>Welcome to Lib Wallet</h1>

My Accounts:
{#each accounts as account}
  <br>
  <a href="{base}/acc/{account.id}">{account.name}</a>
{/each}
<br>

<input bind:value={accountName} placeholder="Account Name" />
<button on:click={createBankAcc}>Create new Bank Account</button>

<a href="{base}/test">test the static adapter</a>
