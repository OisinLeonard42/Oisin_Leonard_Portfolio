<script>
    import { fade } from 'svelte/transition';
    import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
    import { ArtworkCard, Modal } from '$lib/components';
    import { artwork } from '$lib/stores/artworkStore.js';
    import { currentQuote, setRandomQuote } from '$lib/stores/quoteStore.js';
    
    let showQuoteModal = false;
    /**
     * Select a few featured items — e.g., first 4 items
	 * @type {any[]}
	 */
    let featuredItems = [];

    $: $artwork && (featuredItems = $artwork.slice(0, 4));

    function openQuoteModal() {
        setRandomQuote();
        showQuoteModal = true;
    }
</script>


<svelte:head>
    <title>Oisin Leonard Portfolio Website</title>
</svelte:head>

<!-- Page Container -->
<div class="home-container">
    <!-- Hero Section -->
    <section class="hero">
        <h1>Welcome to Oisin Leonard Portfolio Page</h1>
        <p class="subheading">
          This Portfolio Website will show you what I have made through my second semester of collage and it is also my final project for this semester.
        </p>
    </section>

    <!-- Featured Catalogue Section -->
    <section class="featured">
        <h2>Featured Practices</h2>
        <div class="card-grid">
            {#each featuredItems as item, index}
                <button
					type="button"
					class="card-button"
					on:click={() => goto(resolve('/artwork/[title]', { title: item.title }))}
					aria-label={`View details for ${item.title}`}
				>
                    <ArtworkCard
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        animationDelay={index * 80}
                    />
                </button>
            {/each}
        </div>
       
    </section>

    <!-- About Teaser Section -->


    <!-- Quote Modal -->
    <Modal
        bind:isOpen={showQuoteModal}
        {...$currentQuote}
        onClose={() => (showQuoteModal = false)}
    />
</div>


<style>
    .home-container {
        display: flex;
        flex-direction: column;
        gap: var(--space-xl);
    }

    /* Hero Section */
    .hero {
        text-align: center;
        color: white;
        padding: var(--space-xl) var(--space-md);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay;
        background-color: rgba(15, 10, 10, 0.75);
    }

    .hero h1 {
        font-size: var(--font-xxl);
        font-family: var(--font-heading);
        margin-bottom: var(--space-sm);
        color: white;
    }

    .subheading {
        font-size: var(--font-lg);
        font-family: var(--font-body);
        color: var(--text-secondary);
        margin-bottom: var(--space-md);
        color: white;
    }


    /* Featured Section */
    .featured {
        padding: 0 var(--space-md);
        color: white;
        background-size: 200px;
        background-repeat: repeat;
   
    }

    .featured h2 {
        text-align: center;
        color: white;
        font-family: var(--font-heading);
        font-size: var(--font-xl);
        margin-bottom: var(--space-lg);
    }

	/* Ensure button styling doesn’t interfere */
	.card-button {
		all: unset; /* Remove default button styles */
		cursor: pointer;
		display: block;
		text-align: inherit;
	}

	.card-button:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: 4px;
	}

    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: var(--space-lg);
        margin-bottom: var(--space-md);
    }
 
</style>
