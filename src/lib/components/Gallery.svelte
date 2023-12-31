<script>
	import Icon from '@iconify/svelte';
	import { galleryImg } from './objects/galleryImg';
	let modalVisible = false;
	let modalImageSrc = '';
	let modalImageAlt = '';

	const images = galleryImg.map((src, index) => ({
		alt: `Gallery Image ${index + 1}`,
		src: src
	}));

	/**
	 * @param {string} src
	 */
	function openImage(src) {
		modalImageSrc = src;
		modalVisible = true;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		modalVisible = false;
		document.body.style.overflow = '';
	}

	/**
	 * @param {{ key: string; }} event
	 */
	function handleKeydown(event) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}
</script>

<section id="section-galerie" class="mb-20 text-center space-y-10 flex flex-col justify-center p-2 md:h-screen">
	<h2 class="text-4xl md:text-6xl my-2 text-main-white font-bold tracking-wider">Galerie</h2>
	<div class="backdrop-blur-lg shadow-inner flex flex-nowrap h-fit gap-4 overflow-x-auto snap-x snap-mandatory">
		{#each images as image}
			<button
				class="relative flex-none h-72 lg:h-80 aspect-square p-2 snap-center"
				on:click={() => openImage(image.src)}
			>
				<Icon class="absolute w-8 h-8 right-3 top-3" icon="ic:outline-zoom-in" />
				<img
					src={image.src}
					alt={image.alt}
					class="h-full w-full object-cover cursor-pointer opacity-80 hover:opacity-100"
				/>
			</button>
		{/each}
	</div>
</section>


{#if modalVisible}
	<div
		class="fixed inset-0 w-full h-screen bg-background backdrop-blur-lg bg-opacity-60 flex items-center justify-center z-50 overflow-hidden"
		on:click={closeModal}
		on:keydown={handleKeydown}
		role="button"
		tabindex="0"
	>
		<div class="relative flex items-center max-w-[90%] max-h-[90%] md:max-h-[75%] md:max-w-[75%]">
			<img class="object-contain w-full m-0 p-0" alt={modalImageAlt} src={modalImageSrc} />
		</div>
		<Icon
			class="absolute w-10 h-10 top-2 right-2 cursor-pointer"
			icon="ic:round-close"
			on:click={closeModal}
		/>
	</div>
{/if}
