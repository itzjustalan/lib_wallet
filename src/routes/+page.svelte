<script lang="ts">
  import { base } from "$app/paths";
  // import { browser } from "$app/environment";
  // import { unregisterSWs } from "$lib/utils";

  // if (browser && 'serviceWorker' in navigator) {
  //   unregisterSWs().then(_ => {
  //     console.log('serviceWorker found!!', base + '/service-worker.js');
  //     addEventListener('load', function () {
  //       console.log('load fn');
  //       navigator.serviceWorker.register(base + '/service-worker.js');
  //     });
  //   });
  // }
</script>

<h1>Welcome to SvelteKit</h1>

<a href="{base}/test">test the static adapter</a>
