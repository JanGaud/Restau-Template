<script>
	import Meals from './menu/Meals.svelte';
</script>

<section
	class="min-h-screen mb-20 text-center space-y-10 border-2 border-main-white rounded-md p-2"
>
	<h2
		class="text-2xl md:text-4xl lg:text-6xl my-2 text-main-white font-bold underline tracking-wider"
	>
		Menu
	</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-10 p-2">
		<div class="h-full aspect-square">
			<h3 class="text-2xl md:text-3xl lg:text-4xl text-main-white">Entrées</h3>
			<div class="w-60 object-contain mx-auto">
				<img class="h-full w-auto" src="./img/chalk/chalk-2.png" alt="" />
			</div>
		</div>
		<Meals />
		<div class="h-full aspect-square">
			<h3 class="text-2xl md:text-3xl lg:text-4xl text-main-white">Cocktails</h3>
			<div class="w-60 object-contain mx-auto">
				<img class="h-full w-auto" src="./img/chalk/chalk-2.png" alt="" />
			</div>
		</div>
		<div class="h-full aspect-square">
			<h3 class="text-2xl md:text-3xl lg:text-4xl text-main-white">Bières</h3>
			<div class="w-60 object-contain mx-auto">
				<img class="h-full w-auto" src="./img/chalk/chalk-2.png" alt="" />
			</div>
		</div>
	</div>
</section>
