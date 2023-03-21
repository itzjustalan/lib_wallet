<script lang="ts">
  import { transactionService } from "$lib/services/transaction.service";
  import { app } from "$lib/stores/app";

  let amount: number;
  let description: string;
  const createTransaction = async () => {
    if (!$app.account?.id) return alert("no acc selected");
    transactionService
      .createNew(amount, description, $app.account.id)
      .then((_) => app.navpop());
  };
</script>

<div class="page">
  <div class="page-title">Create New Bank Account</div>

  <input bind:value={amount} placeholder="Amount" />
  <input bind:value={description} placeholder="Description" />
  <button on:click={createTransaction}>Submit</button>
</div>
