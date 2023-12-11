<script>
  import { imagePaths } from './objects/headerImg.js';
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

  function updateBackgroundPosition() {
    yOffset = window.scrollY * 0.1;
  }

  window.addEventListener('scroll', updateBackgroundPosition);

  $: backgroundImage = `url(${imagePaths[currentIndex]})`;
  $: nextIndex = (currentIndex + 1) % imagePaths.length;
  $: nextBackgroundImage = `url(${imagePaths[nextIndex]})`;
  $: backgroundStyle = `background-position: center ${yOffset}px; background-size: cover;`;
  
  setInterval(nextSlide, 15000);
</script>



<header class="h-screen -mx-20 -my-36 bg-no-repeat relative overflow-hidden">
  <div class="absolute w-full h-full bg-black bg-opacity-40 z-20"></div>

  <!-- Current Image -->
  <div class={`absolute w-full h-full bg-image ${fading ? 'fade-out' : 'fade-in'}`} 
       style="background-image: {backgroundImage}; {backgroundStyle}">
  </div>

  <!-- Next Image -->
  <div class={`absolute w-full h-full bg-image ${fading ? 'fade-in' : 'fade-out'}`} 
       style="background-image: {nextBackgroundImage}; {backgroundStyle}">
  </div>

  <!-- Navigation bubbles -->
  <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex z-20">
    {#each imagePaths as path, index}
      <button
        class="cursor-pointer bg-[#ffffff] rounded-full mx-2 w-10 h-1 focus:outline-none"
        class:opacity-80={index === currentIndex}
        class:opacity-50={index !== currentIndex}
        on:click={() => {currentIndex = index;}}
        on:keypress={(event) => handleKeyPress(event, index)}
        tabindex="0"
      ></button>
    {/each}
  </div>
</header>



