<script>
    import { fade } from 'svelte/transition';
    import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
	import { artwork, categories, tags } from '$lib/stores';
	import { ArtworkCard } from '$lib/components';

	let search = '';
	let selectedTag = 'all';
	let sortBy = 'title';

    function resetFilters() {
		search = '';
		selectedTag = 'all';
		sortBy = 'title';
	}

	$: isFiltered = search || selectedTag !== 'all' || sortBy !== 'title';

	// Reactive filtered + sorted artwork
	$: filteredArtwork = $artwork
		.filter(item => {
			const matchesTag = selectedTag === 'all' || item.tags?.includes(selectedTag);
			const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
								  item.description.toLowerCase().includes(search.toLowerCase());
			return matchesTag && matchesSearch;
		})
		.sort((a, b) => {
			if (sortBy === 'title') return a.title.localeCompare(b.title);
			if (sortBy === 'artwork') return a.artwork.localeCompare(b.artwork);
			return 0;
		});

    // Reactive hash to force re-animation
	$: animationKey = `${search}-${selectedTag}-${sortBy}-${filteredArtwork.map(i => i.id).join(',')}`;
</script>


<svelte:head>
    <title>Artwork | Starter Kit</title>
</svelte:head>


<section class="artwork-wrapper">
	<div class="artwork-heading-wrapper">
		<h1 class="artwork-heading">Artwork Portfolio</h1>
	</div>
	
    <div class="grid" class:narrow={filteredArtwork.length <= 2}>
		{#if filteredArtwork.length > 0}
            {#each filteredArtwork as item, index (animationKey + '-' + item.id)}
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
                        artwork={item.artwork}
                        tags={item.tags}
                        animationDelay={index * 80}
                    />
                </button>
            {/each}
        {:else}
            <p class="empty">No items match your search or filter.</p>
        {/if}
	</div>
</section>


<style>
	.artwork-wrapper {
        width: 100%;
        margin: 0 auto;
        padding: 0;
    }

    .artwork-heading-wrapper {
       /* background-image: url('/images/backgrounds/scroll-teaser.png');*/
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.95;
        padding: var(--space-lg) 0;
        text-align: center;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        margin-bottom: var(--space-lg);
    }

    .artwork-heading {
        font-family: var(--font-heading);
        font-size: var(--font-xxl);
        position: relative;
        color: var(--text-primary);
    }

    .artwork-heading::after {
        content: "";
        display: block;
        width: 80px;
        height: 4px;
        margin: var(--space-sm) auto 0;
        background: var(--color-accent);
        border-radius: var(--radius-sm);
    }


    .grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        justify-content: center;
		gap: var(--space-lg);
        padding: 0 var(--space-lg);
	}

    .grid.narrow {
		grid-template-columns: repeat(auto-fit, minmax(320px, 640px));
        margin: 0 auto;
    }

    .empty {
		font-style: italic;
		color: var(--text-tertiary);
		margin-top: var(--space-md);
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

</style>
