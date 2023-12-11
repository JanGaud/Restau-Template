<script>
  import Icon from '@iconify/svelte';
</script>

<style>
  .glow-icon:hover {
    animation: glow 1s infinite alternate;
  }

  @keyframes glow {
    0% {
      transform: scale(1);
      opacity: 0.7;
    }
    100% {
      transform: scale(1.03);
      opacity: 1;
    }
  }
</style>

<div class="mt-40 mb-20 h-20 w-full border-2 border-main-white rounded-md flex items-center justify-around text-main-white shadow-inner">
  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/100genies" class="glow-icon">
    <Icon class="w-14 h-14 hover:text-gold transition-colors" icon="ic:baseline-facebook" />
  </a>
  <a href="/" class="glow-icon">
    <Icon class="w-14 h-14 hover:text-gold transition-colors" icon="uil:schedule" />
  </a>
  <a href="/" class="glow-icon">
    <Icon class="w-14 h-14 hover:text-gold transition-colors" icon="ic:baseline-contact-support" />
  </a>
</div>
