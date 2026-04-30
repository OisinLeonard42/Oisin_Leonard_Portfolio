import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { artwork } from '$lib/stores';


/** @type {import('./$types').PageLoad} */
export function load({ params }) 
{
  const title = decodeURIComponent(params.title);
	const allItems = get(artwork);
	const item = allItems.find((i) => i.title === title);

  if (!item) {
    throw error(404, 'Artwork item not found');
  }

  return { item };
}