<script>
	import { Gallery } from 'flowbite-svelte';
	import { galleryImg } from './objects/galleryImg';

	const images = galleryImg.map((src, index) => ({
		alt: `Image ${index + 1}`,
		src: src
	}));

	/**
	 * @param {string} src
	 */
	function openImage(src) {
		throw new Error('Function not implemented.');
	}
</script>

<section class="mb-20 text-center backdrop-blur-md rounded-md p-2">
		<h2 class="text-4xl md:text-6xl my-2 text-main-white font-bold underline tracking-wider">Galerie</h2>
	<div class="flex flex-nowrap h-fit gap-4 overflow-x-scroll">
		{#each images as image, index}
			<div class="flex-none h-60 aspect-square p-2">
				<img
					src={image.src}
					alt={image.alt}
					class="h-full w-full object-cover cursor-pointer hover:opacity-50"
				/>
			</div>
		{/each}
	</div>
</section>

