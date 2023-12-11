<script>
	import Icon from '@iconify/svelte';
</script>

<nav
	class="h-28 w-full fixed top-0 px-4 py-2 bg-gold-gradient z-30 flex items-center justify-center md:justify-between drop-shadow-lg"
>
	<div class="h-full w-52">
		<a href="/"
			><img
				class="object-contain h-full drop-shadow-xl"
				src="./img/100-genies-logo.png"
				alt=""
			/></a
		>
	</div>
    <Icon class="md:hidden absolute top-2 right-2 w-10 h-10" icon="iconamoon:menu-burger-horizontal" />
	<div>
		<ul class="hidden md:flex items-center font-bold space-x-8 tracking-wider pb-4">
			<li class="hover:border-b-2 transition-all"><a href="/reservation">Réservation</a></li>
			<li class="hover:border-b-2 transition-all"><a href="/menu">Menu</a></li>
			<li class="hover:border-b-2 transition-all"><a href="/gallery">Gallery</a></li>
			<li class="hover:border-b-2 transition-all"><a href="/promotions">Promotions</a></li>
			<li class="hover:border-b-2 transition-all"><a href="/contact">Contact</a></li>
		</ul>
	</div>
</nav>
