
import { writable, derived } from 'svelte/store';

/**
 * Artwork of resources promoting healthy, mindful, and disciplined living.
 * Each item is structured for use with Card and Modal components.
 */
const initialArtwork= [
    {
        id: "1",
        title: "Artwork 1 2D Zombie Sprite",
        description: "This Artwork was used for a 4th year project where they needed a zombie enemy for there game.",
        tags: [],
        featured: false, 
        image: "/images/artwork/UpdatedZombie.gif"
    },
    {
        id: "2",
        title: "Artwork 2 2D Elevator",
        description: "This Artwork was used in the 4th year project where they needed a life to finish the level.",
        tags: [],
        featured: false,
        image: "/images/artwork/elevator2D.png"
    },
    {
        id: "3",
        title: "Artwork 3 3D Elevator",
        description: "This Artwork was made for an art project where we had to make 3D models from the 4th year project.",
        tags: [],
        featured: false,
        image: "/images/artwork/elevator3D.png"
    },
    {
        id: "4",
        title: "Artwork 4 Mining Helment 2D",
        description: "This Artwork was made for a 4th year game project where the mining helmet was made for there game.",
        tags: [],
        featured: false,
        image: "/images/artwork/Mining_Helment-Sheet.png"
    },
    {
        id: "5",
        title: "Artwork 5 hand moduel",
        description: "This hand moduel was for an art project where we had to create a hand in the software tool called maya.",
        tags: [],
        featured: false,
        image: "/images/artwork/hand.png"
    },
    {
        id: "6",
        title: "Artwork 6 The Island",
        description: "This art project was supposed to be an Island but I didnt have enough time to finish the project.",
        tags: [],
        featured: false,
        image: "/images/artwork/Island.png"
    },
    {
        id: "7",
        title: "Artwork 7 The Castle",
        description: "The castle was made for an assignment to test maya I wish I had time to finish it",
        tags: [],
        featured: false,
        image: "/images/artwork/castle.png"
    },
    {
        id: "8",
        title: "Artwork 8 The Cup",
        description: "The cup was the first art project that we had to make in maya.",
        tags: [],
        featured: false,
        image: "/images/artwork/cupImage (1).jpg"
    },
    {
        id: "9",
        title: "Artwork 9 The Book",
        description: "The book was one of my favourite projects to work on and it was nice to add a background image to the scenery as well.",
        tags: [],
        featured: false,
        image: "/images/artwork/Book_Cover (1).jpg"
    },
    {
        id: "10",
        title: "Artwork 10 Toy Car",
        description: "The Toy car was the last Maya project for the semister and I really enjoyed working on it.",
        tags: [],
        featured: false,
        image: "/images/artwork/ToyCar_Render.png"
    },
    {
        id: "11",
        title: "Artwork 11 The Bus",
        description: "The bus was one of the first projects that we had to put textures onto them.",
        tags: [],
        featured: false,
        image: "/images/artwork/Sample_bus.png"
    },
    {
        id: "12",
        title: "Artwork 12 The test model",
        description: "This image was made in a animation software called Source Filmaker I wanted to try and use different 3D moduel softwares to see what I can do.",
        tags: [],
        featured: false,
        image: "/images/artwork/sfm_test.png"
    },
    {
        id: "13",
        title: "Artwork 13 The Attraction",
        description:"This artwork was also used in source filmaker. I wanted to test lighting and sets.",
        tags: [],
        featured: false,
        image: "/images/artwork/Springtrap_test.png"
    },

     {
        id: "14",
        title: "Artwork 14 Mining Helment 3D",
        description:"This artwork was made for an artwork project where an item from our group project was made into a 3D item.",
        tags: [],
        featured: false,
        image: "/images/artwork/Mining_hat3D.png"
    }
];


// Writable store
export const artwork = writable(initialArtwork);


// Derived store: unique categories
export const categories = derived(artwork, $artwork => {
    const set = new Set($artwork.map(item => item.artwork));
    return Array.from(set).sort();
});


// Derived store: unique tags (flattened and sorted)
export const tags = derived(artwork, $artwork => {
    const allTags = $artwork.flatMap(item => item.tags || []);
    const tagSet = new Set(allTags.map(tag => tag.trim().toLowerCase()));
    return Array.from(tagSet).sort();
});
