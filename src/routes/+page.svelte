<script lang="ts">
  import { base } from "$app/paths";
    import { accountService } from "$lib/services/account.service";
    import { onMount } from "svelte";

  onMount(async () => {
    await fetchaccs();
  });

  const fetchaccs = async () => {
    const result = await accountService.findAll();
    if (result instanceof Error) alert(result.message);
    else if (result.length) window.location.replace(base + '/dash')
  }
</script>

<div class="page">
<h1>Welcome to Lib Wallet</h1>

<a href="{base}/test">test the static adapter</a><br>

you're already logged in? => dashboard <br>
else => pls sign in
</div>