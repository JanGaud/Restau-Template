<script>
	import Icon from '@iconify/svelte';
</script>

<section
	class="min-h-screen mb-20 text-center space-y-10 flex flex-col justify-center border-2 border-main-white rounded-md p-2"
>
	<h2 class="text-4xl md:text-6xl my-2 text-main-white font-bold underline tracking-wider">À propos</h2>
	<div class="space-y-6">
		<h3 class="text-xl md:text-2xl text-gold font-bold tracking-wider">Notre histoire</h3>
		<p class="text-main-white text-lg">
			Le Resto-pub 100 génies a été créé à l'image des étudiantes et des étudiants de l'ÉTS. Il vous
			offre un menu varié, une sélection intéressante de bières et diverses consommations
			alcoolisées. Lors des soirs de match, venez vivre l'émotion de la partie avec un public en
			délire tout en profitant de nos écrans géants et de nos spéciaux de la soirée. À seulement
			quelques minutes de marche du Centre Bell, le Resto-pub Le 100 génies est l'endroit idéal pour
			l'avant match. Tout profit engendré par l'établissement est directement retourné à la
			communauté étudiante de l'ÉTS.
		</p>
	</div>
	<div class="flex justify-center gap-8 flex-wrap text-gold-second py-2">
		<small class="flex items-center gap-1"
			><Icon class="w-5 h-5" icon="simple-icons:justeat" />Resto-Pub 100 Génies</small
		>
		<small class="flex items-center gap-1"
			><Icon class="w-5 h-5" icon="codicon:location" /> 530 Rue Peel</small
		>
		<small class="flex items-center gap-1"
			><Icon class="w-5 h-5" icon="maki:city" />Centre-ville</small
		>
		<small class="flex items-center gap-1"
			><Icon class="w-5 h-5" icon="ic:outline-phone" />(514) 396-8887</small
		>
	</div>
</section>
