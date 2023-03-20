<script lang="ts">
  import Accounts from "$lib/pages/accounts/Accounts.svelte";
  import DashBoard from "$lib/pages/dash/DashBoard.svelte";
  import Debug from "$lib/pages/debug/Debug.svelte";
  import Home from "$lib/pages/home/Home.svelte";
  import NewAccount from "$lib/pages/new-account/NewAccount.svelte";
  import Test from "$lib/pages/test/Test.svelte";
  import { app } from "$lib/stores/app";
</script>

{#if $app.page === "home"}
  <Home />
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
{/if}
