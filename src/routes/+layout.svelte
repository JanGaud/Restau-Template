<script>
	import Navbar from '$lib/components/Navbar.svelte';
import '../app.pcss';
</script>

<Navbar />
<div class="mx-2 md:mx-20 my-36">
	<slot />
</div>
