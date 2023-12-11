<script>
  import { imagePaths } from './objects/headerImg.js';
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % imagePaths.length;
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

  $: backgroundImage = `url(${imagePaths[currentIndex]})`;

  setInterval(nextSlide, 15000);
</script>

<header
  class="h-screen -mx-20 -my-36 bg-cover bg-center bg-no-repeat"
  style="background-image: {backgroundImage}; transition: background-image 0.5s ease-in-out;"
>
  <div class="absolute w-full h-full bg-black bg-opacity-40"></div>

  <!-- Navigation bubbles -->
  <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex">
    {#each imagePaths as path, index}
      <button
        class="cursor-pointer bg-white rounded-full mx-2 w-10 h-1 focus:outline-none"
        class:opacity-100={index === currentIndex}
        class:opacity-50={index !== currentIndex}
        on:click={() => currentIndex = index}
        on:keypress={(event) => handleKeyPress(event, index)}
        tabindex="0"
      ></button>
    {/each}
  </div>
</header>
