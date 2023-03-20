<script lang="ts">
    import { base } from "$app/paths";
    import { accountService } from "$lib/services/account.service";
    import { app } from "$lib/stores/app";

  let accountName: string;
  const createBankAcc = async () => {
    if (!accountName) alert("enter an account name");
    await accountService.createNew(accountName);
    app.navto('dash');
  };
</script>


<div class="page">
    <div class="page-title">Create New Bank Account</div>

    <input bind:value={accountName} placeholder="Account Name" />
    <button on:click={createBankAcc}>Create new Bank Account</button>
</div>
