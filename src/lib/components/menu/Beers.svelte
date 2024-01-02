<script>
	import { beer } from '../objects/menuObj/beers/beers.js';
</script>

<div class="h-full">
	<h3 class="text-2xl md:text-3xl lg:text-4xl text-main-white">Bières & Soft Drinks</h3>
	<div class="w-60 object-contain mx-auto">
		<img class="max-w-full h-auto" src="./img/chalk/chalk-2.png" alt="" />
	</div>
	<div class="text-sm md:text-left w-full md:px-20 break-words py-4 overflow-auto">
		<ul class="flex flex-col space-y-4">
			{#each beer as beverage}
				<li class="flex flex-col">
					<small class="break-words"> <strong>{beverage.name}</strong> - {beverage.price}</small>
					{#if beverage.type}
						<small class="break-words">Détails: {beverage.type}</small>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</div>
