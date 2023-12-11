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

<section
	class="min-h-screen mb-20 text-center backdrop-blur-md rounded-md p-2"
>
	<div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
		{#each images as image, index}
			<div class="h-60 w-full overflow-hidden">
				<img
					src={image.src}
					alt={image.alt}
					class="h-full w-full object-cover cursor-pointer hover:opacity-50"
				/>
			</div>
		{/each}
	</div>
</section>
