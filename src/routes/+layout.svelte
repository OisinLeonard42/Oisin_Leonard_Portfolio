<script>
    // Import components
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
</script>
<div id="layout-container">
    <!-- Header -->
    <Header />
    <!-- Page Content -->
    <main id="main-content" tabindex="-1">
        <slot />
    </main>
      <header>
    <h1>
        If you want to listen to music while going through the website click the play button.
    </h1>
        <audio autoplay loop controls>
    <source src="/Startup.mp3" type="audio/mpeg" /><!--This is audio can play while you explore the website.-->
    Your browser does not support the audio element.
</audio>
    </header>

    <!-- Footer -->
    <Footer />
</div>

<style>
    #layout-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: var(--color-background);
        font-family: var(--font-body);
          color: white; 
    }

    main {
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        isolation: isolate;
         color: white; 
    }

    main::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        min-height: 100%;
        width: 100%;
        /*background-image: url("/images/backgrounds/zen-enso-bg.png");*/
        background-repeat: repeat-y; /* or 'no-repeat' for full image */
        background-size: cover;      /* or 'contain' if you want it less aggressive */
        background-position: center top;
        opacity: 0.66;
        z-index: -1;
    }

    @media (max-width: 768px) {
        main {
            padding: var(--space-lg) var(--space-md);
        }
    }
</style>
