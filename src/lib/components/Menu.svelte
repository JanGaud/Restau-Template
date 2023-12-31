<script>
    import Appetizers from './menu/Appetizers.svelte';
    import Beers from './menu/Beers.svelte';
    import Cocktails from './menu/Cocktails.svelte';
    import Meals from './menu/Meals.svelte';
    import Icon from '@iconify/svelte';

    const pages = ['Food', 'Drinks'];
    let activePageIndex = 0;

    /**
	 * @param {string} page
	 */
    function navigateToPage(page) {
        const pageIndex = pages.indexOf(page);
        if (pageIndex >= 0) {
            activePageIndex = pageIndex;
        }
    }
</script>

<section>
    <div class="w-full flex justify-center gap-20 pb-5">
        <button class="flex items-center gap-2 transition-colors uppercase {activePageIndex === 0 ? 'border-b border-gold text-gold glow' : 'hover:border-b hover:border-gold hover:text-gold'}"
            on:click={() => navigateToPage('Food')}>
            Nourriture <Icon class="h-5 w-5" icon="fluent:food-24-filled" />
        </button>
        <button class="flex items-center gap-2 transition-colors uppercase {activePageIndex === 1 ? 'border-b border-gold text-gold glow' : 'hover:border-b hover:border-gold hover:text-gold'}"
            on:click={() => navigateToPage('Drinks')}>
            Breuvage <Icon class="h-5 w-5" icon="ph:wine-fill" />
        </button>
    </div>

    <div id="section-menu" class="relative min-h-screen mb-20 text-center space-y-10 border-2 border-main-white backdrop-blur-lg rounded-md p-2 shadow-lg">
        <h2 class="text-4xl md:text-6xl my-2 text-main-white font-bold tracking-wider">Menu</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 p-2">
            {#if activePageIndex === 0}
                <Appetizers />
                <Meals />
            {:else if activePageIndex === 1}
                <Cocktails />
                <Beers />
            {/if}
        </div>
        <div class="absolute bottom-2 right-2 p-2 rounded-full">{activePageIndex + 1}</div>
    </div>
</section>
