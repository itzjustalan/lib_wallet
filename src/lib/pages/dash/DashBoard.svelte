<script lang="ts">
    import { browser } from "$app/environment";
  import { base } from "$app/paths";
  import { accountService } from "$lib/services/account.service";
  import { app } from "$lib/stores/app";
  import Item from "$lib/widgets/drawer/Item.svelte";
  import { onMount } from "svelte";

  if (browser && !("indexedDB" in window)) {
    alert("This browser doesn't support IndexedDB");
  }

  onMount(async () => {
    if (!$app.account) {
      const result = await accountService.findAll();
      if (result instanceof Error) alert(result.message);
      else if (result.length && !$app.account) app.setAccount(result[0]);
    }
  });
</script>

<div class="page">
  <div class="page-title">Dashboard</div>
  <Item
    text={"Account: " + $app.account?.name}
    onclick={() => app.navto('accounts')}
  />
</div>
