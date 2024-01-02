<script>
	import { meals } from '../objects/menuObj/meals/meals.js'
</script>

<div class="h-full">
	<h3 class="text-2xl md:text-3xl lg:text-4xl text-main-white">Repas</h3>
	<div class="w-60 object-contain mx-auto">
		<img class="max-w-full h-auto" src="./img/chalk/chalk-2.png" alt="" />
	</div>
	<div class="text-sm md:text-left w-full md:px-20 break-words py-4 overflow-auto">
		<ul class="flex flex-col space-y-4">
			{#each meals as meal}
				<li class="flex flex-col">
					<small class="break-words">
						<strong>{meal.name}</strong> - {meal.price}
						<br>Ingredients: {meal.ingredients}</small
					>
					{#if meal.extra}
						<small class="break-words"> ( Extra: {meal.extra} )</small>
					{/if}
					{#if meal.sauces}
						<small class="break-words">Sauces: {meal.sauces}</small>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</div>
