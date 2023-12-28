<script>
	import Icon from '@iconify/svelte';
</script>

<footer class="w-full h-40 border-t-2 border-gold backdrop-blur-lg">
	<div class="h-24 p-2 flex justify-around">
		<a href="/"
			><img
				class="object-contain h-full drop-shadow-xl"
				src="./img/100-genies-logo.png"
				alt=""
			/></a
		>
	</div>
	<div>
		<ul class="flex justify-around">
			<li>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.facebook.com/100genies"
					class="hovglow-fx"
				>
					<Icon
						class="w-10 h-10 md:w-12 md:h-12 hover:text-gold transition-colors"
						icon="ic:baseline-facebook"
					/>
				</a>
			</li>
		</ul>
	</div>
</footer>
