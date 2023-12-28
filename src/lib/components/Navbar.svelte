<script>
	import Icon from '@iconify/svelte';
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
		if (isMenuOpen) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	}

	const menuItems = [
		{ href: "/#section-reservation", text: "Réservation" },
		{ href: "/menu", text: "Menu" },
		{ href: "/#section-galerie", text: "Galerie" },
		{ href: "/#section-promotions", text: "Promotions" },
		{ href: "/#section-contact", text: "Contact" },
	];
</script>

<nav
	class="h-32 w-full fixed top-0 px-4 pt-4 bg-gold-gradient backdrop-blur-sm z-50 flex items-center justify-center md:justify-between drop-shadow-lg"
>
	<div class="h-full">
		<a href="/"
		><img
			class="object-contain h-full drop-shadow-xl"
			src="./img/100-genies-logo.png"
			alt=""
		/></a
		>
	</div>
	<button class="md:hidden absolute top-2 right-2" on:click={toggleMenu}>
		{#if isMenuOpen}
			<Icon class="w-10 h-10" icon="ic:round-close" />
		{:else}
			<Icon class="w-10 h-10" icon="iconamoon:menu-burger-horizontal" />
		{/if}
	</button>
	<div>
		<ul class="hidden md:flex items-center font-bold space-x-8 tracking-wider pb-4 uppercase">
			{#each menuItems as item}
				<li class="hover:border-b hover:shadow-lg drop-shadow-lg transition-all">
					<a href={item.href}>{item.text}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<!-- menu mobile -->
<div
	class={`fixed inset-0 transform ${
		isMenuOpen ? 'translate-y-0' : '-translate-y-full'
	} transition-transform duration-300 ease-in-out md:hidden z-40 bg-gold-gradient backdrop-blur-md`}
>
	<ul
		class="flex flex-col items-center justify-center font-bold space-y-8 tracking-wider h-full text-3xl uppercase"
	>
		{#each menuItems as item}
			<li class="drop-shadow-lg">
				<a on:click={toggleMenu} href={item.href}>{item.text}</a>
			</li>
		{/each}
	</ul>
</div>
