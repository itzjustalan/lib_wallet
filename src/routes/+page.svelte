<script lang="ts">
  import Accounts from "$lib/pages/accounts/Accounts.svelte";
  import DashBoard from "$lib/pages/dash/DashBoard.svelte";
  import Debug from "$lib/pages/debug/Debug.svelte";
  import Halid from "$lib/pages/home/Home.svelte";
  import NewAccount from "$lib/pages/new-account/NewAccount.svelte";
    import NewTransaction from "$lib/pages/new-transaction/NewTransaction.svelte";
  import Test from "$lib/pages/test/Test.svelte";
    import Transactions from "$lib/pages/transactions/Transactions.svelte";
  import { app } from "$lib/stores/app";
</script>

{#if $app.page === "home"}
  <Halid />
{:else if $app.page === "dash"}
  <DashBoard />
{:else if $app.page === "test"}
  <Test />
{:else if $app.page === "debug"}
  <Debug />
{:else if $app.page === "accounts"}
  <Accounts />
{:else if $app.page === "new-account"}
  <NewAccount />
{:else if $app.page === "transactions"}
  <Transactions />
{:else if $app.page === "new-transaction"}
  <NewTransaction />
{/if}
