<script>
	import { onMount } from 'svelte';
	import { imagePaths } from './objects/headerImg.js';
    import Icon from '@iconify/svelte';

	let currentIndex = 0;
	let fading = false;

	function nextSlide() {
		fading = true;
		setTimeout(() => {
			currentIndex = (currentIndex + 1) % imagePaths.length;
			fading = false;
		}, 1000);
	}

	/**
	 * @param {KeyboardEvent & { currentTarget: EventTarget & HTMLButtonElement; }} event
	 * @param {number} index
	 */
	function handleKeyPress(event, index) {
		if (event.key === 'Enter' || event.key === ' ') {
			currentIndex = index;
		}
	}

	let yOffset = 0;
	/**
	 * @type {{ (): void; (this: Window, ev: Event): any; (this: Window, ev: Event): any; }}
	 */
	let updateBackgroundPosition;

	onMount(() => {
		updateBackgroundPosition = () => {
			yOffset = window.scrollY * 0.2;
		};

		window.addEventListener('scroll', updateBackgroundPosition);
		setInterval(nextSlide, 15000);

		return () => {
			window.removeEventListener('scroll', updateBackgroundPosition);
		};
	});

	$: backgroundImage = `url(${imagePaths[currentIndex]})`;
	$: nextIndex = (currentIndex + 1) % imagePaths.length;
	$: nextBackgroundImage = `url(${imagePaths[nextIndex]})`;
	$: backgroundStyle = `background-position: center ${yOffset}px; background-size: cover;`;
</script>

<header class="h-screen -mx-2 md:-mx-20 -my-36 bg-no-repeat relative overflow-hidden">
	<div class="absolute w-full h-full bg-black bg-opacity-60 z-20"></div>

	<div class="absolute w-full flex flex-col space-y-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
		<h1 class="text-center text-[#fffdf4c0] drop-shadow-xl font-bold text-5xl md:text-8xl glow-fx">Voir notre menu!</h1>
		<div class="flex justify-center">
			<a href="/menu" class="bg-[#dcbe5ba8] shadow-lg hover:bg-[#897c4ab6] backdrop-blur-sm py-3 px-5 rounded-full flex items-center gap-4 font-bold text-xl uppercase">Consulter <Icon icon="fluent:food-24-filled" /></a>
		</div>
	</div>

	<!-- Current Image -->
	<div
		class={`absolute w-full h-full bg-image ${fading ? 'fade-out' : 'fade-in'}`}
		style="background-image: {backgroundImage}; {backgroundStyle}"
	></div>

	<!-- Next Image -->
	<div
		class={`absolute w-full h-full bg-image ${fading ? 'fade-in' : 'fade-out'}`}
		style="background-image: {nextBackgroundImage}; {backgroundStyle}"
	></div>

	<!-- Navigation bubbles -->
	<div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex z-20">
		{#each imagePaths as path, index}
			<button
				class="cursor-pointer bg-[#ffffff] rounded-full mx-2 w-10 h-1 focus:outline-none"
				class:opacity-80={index === currentIndex}
				class:opacity-50={index !== currentIndex}
				on:click={() => {
					currentIndex = index;
				}}
				on:keypress={(event) => handleKeyPress(event, index)}
				tabindex="0"
			></button>
		{/each}
	</div>
</header>
