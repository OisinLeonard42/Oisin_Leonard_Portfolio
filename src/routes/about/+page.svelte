<script>
    import { asset } from '$app/paths';
    import { PhilosophyCard } from '$lib/components';

</script>

<svelte:head>
    <title>About | Oisin Leonard Portfolio</title>
</svelte:head>


<section class="intro section-hero">
    <h1>About Me section</h1>
    <p>
       This website is a Portfolio website of all the artworks and other projects I have made throughout the year.,
       This part of the website is about me and why I decided to design this website. And I have presented my C.V. below for people to see if they want to contact me for an intership or a job.
    </p>
     <p>
      Completeing my four years of collage from my IDAD course.
      </p>
<p>
Some of my work was used in a game project for the fourth years games to help them with there final project.
    </p>
</section>

<section class="gallery section-gallery">
    <h2>C.V. Showcase</h2>
    <p>
        Here is a showcase of my C.V. 
    </p>
    <div class="grid">
        <figure>
            <img src={asset("/images/about/C.V.1.png")} alt="hello" />
              <img src={asset("/images/about/C.V.2.png")} alt="hello" />
                <img src={asset("/images/about/C.V.3.png")} alt="hello" />
      
        </figure>
    </div>
</section>

<style>
    section {
        margin-bottom: var(--space-xl);
        padding: var(--space-lg) var(--space-md);
        background-color: var(--color-surface);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        animation: fadeIn 0.6s ease-in;
    }

    section h1,
    section h2 {
        font-family: var(--font-heading);
        font-size: var(--font-xl);
        margin-bottom: var(--space-sm);
        text-align: center;
        position: relative;
    }

    section h2::after {
        content: "";
        display: block;
        height: 2px;
        width: 60px;
        margin: var(--space-xs) auto 0 auto;
        background: var(--color-accent);
        border-radius: var(--radius-sm);
    }

    /* Section: Hero */
    .section-hero {
        background-image: url("/images/About/C.V.1.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay;
        background-color: rgba(15, 2, 2, 0.8);
    }

    /* Section: Gallery */
    .section-gallery {
        background-image: url("/images/About/C.V.2.png");
        background-size: 800px;
        background-repeat: repeat;
        background-position: bottom center;
        opacity: 0.95;
    }

    /* Section: Quote or Reflection */


    p {
        font-size: var(--font-base);
        color: var(--text-secondary);
        max-width: 700px;
        margin: 0 auto var(--space-md);
        text-align: center;
        line-height: 1.8;
    }



    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: var(--space-lg);
        max-width: 1100px;
        margin: 0 auto;
    }

    figure {
        margin: 0;
        background: var(--color-background);
        border-radius: var(--radius-sm);
        overflow: hidden;
        box-shadow: var(--shadow-sm);
    }

    figure img {
        width: 100%;
        height: auto;
        display: block;
    }

   

    /* Animations */
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

 

        .grid {
            grid-template-columns: 1fr;
        }

        section h1, section h2 {
            font-size: var(--font-lg);
        }
    

</style>