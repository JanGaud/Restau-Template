<script>
	import Navbar from '$lib/components/Navbar.svelte';
import '../app.pcss';
</script>

<Navbar />
<div class="mx-20 my-24 min-h-screen">
	<slot />
</div>
