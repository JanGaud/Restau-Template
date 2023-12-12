<script>
	import Appetizers from './menu/Appetizers.svelte';
	import Beers from './menu/Beers.svelte';
	import Cocktails from './menu/Cocktails.svelte';
	import Meals from './menu/Meals.svelte';
	import Icon from '@iconify/svelte';

	let activePageIndex = 0;

	/**
	 * @param {string} direction
	 */
	function navigate(direction) {
		if (direction === 'next') {
			activePageIndex = (activePageIndex + 1) % 2;
		} else if (direction === 'prev') {
			activePageIndex = (activePageIndex - 1 + 2) % 2;
		}
	}
</script>

<section
	id="section-menu"
	class="relative min-h-screen mb-20 text-center space-y-10 border-2 border-main-white rounded-md p-2"
>
	<h2 class="text-4xl md:text-6xl my-2 text-main-white font-bold underline tracking-wider">Menu</h2>
	<div class="absolute top-0 w-full flex justify-around">
		<button on:click={() => navigate('prev')}
			><Icon
				class="w-10 h-10 glow-fx hover:text-gold transition-colors"
				icon="icon-park-outline:left-c"
			/></button
		>
		<button on:click={() => navigate('next')}
			><Icon
				class="w-10 h-10 glow-fx hover:text-gold transition-colors"
				icon="icon-park-outline:right-c"
			/></button
		>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-10 p-2">
		{#if activePageIndex === 0}
			<Appetizers />
			<Meals />
		{:else}
			<Cocktails />
			<Beers />
		{/if}
	</div>
	<div class="absolute bottom-2 right-3 p-2 border rounded-full">{activePageIndex + 1}</div>
</section>
