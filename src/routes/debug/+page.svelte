<script lang="ts">
    import { browser, dev } from "$app/environment";
    import { base } from "$app/paths";
    import { accountService } from "$lib/services/account.service";
    import { theme } from "$lib/stores/theme";
    import Item from "$lib/widgets/drawer/Item.svelte";

    if(browser && !dev) window.location.replace(base + '/');
    const deleteIDB = async () => {
        if (!browser) return;
        const { deleteDB } = await import("idb");
        await deleteDB('lib_wallet');
        alert('done');
    }
    const populateIDB = async () => {
        if (!browser) return;
        const promises = [];
        promises.push(accountService.createNew('primary'))
        promises.push(accountService.createNew('savings'))
        promises.push(accountService.createNew('stocks'))
        await Promise.all(promises);
        alert('done');
    }
</script>

<div class="page">
    <div class="page-title">Developer Settings</div>
    <Item text={'theme: ' + $theme} onclick={theme.toggle} />
    <Item text="delete index db" onclick={deleteIDB} />
    <Item text="populate index db" onclick={populateIDB} />
</div>