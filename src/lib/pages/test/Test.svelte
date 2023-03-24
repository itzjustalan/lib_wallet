<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import { accountService } from "$lib/services/account.service";
  import type { Account } from "$lib/models/account";

  let accountName: string;
  let selectedAccount: Account;
  let accounts: Account[] = [];
  const createBankAcc = async () => {
    if (!accountName) alert("enter an account name");
    await accountService.createNew({ name: accountName });
    // await accountService.createNew(accountName);
    // let gg = await testService.findAll();
    // if (gg instanceof Error) return;
    // else if (gg.length) gg[0].name;
    await fetchaccs();
  };

  if (browser && !("indexedDB" in window)) {
    alert("This browser doesn't support IndexedDB");
  }

  onMount(async () => {
    await fetchaccs();
  });

  const selectacc = (account: Account) => selectedAccount = account;
  const fetchaccs = async () => {
    const result = await accountService.findAll();
    if (result instanceof Error) alert(result.message);
    else accounts = result;
    if (accounts.length) selectedAccount = accounts[0];
  }
</script>

<div class="page">
<h1>
    Just a simple page to test svelte kit static adapter for gh pages
</h1>

{#if selectedAccount}
  selected account: {selectedAccount.name}<br>
{/if}

{#each accounts as account}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={() => selectacc(account)}>{account.name}</div>
{/each}
<br>

<input bind:value={accountName} placeholder="Account Name" />
<button on:click={createBankAcc}>Create new Bank Account</button>

</div>