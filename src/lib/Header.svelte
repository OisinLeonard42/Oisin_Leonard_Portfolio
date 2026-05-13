<script>
    import { asset } from '$app/paths';
    import Navigation from './Navigation.svelte';
</script>


<header class="header">
    <div class="logo-area">
        <h1>Oisin Leonard Portfolio Website</h1>
    </div>
    <Navigation />
</header>


<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 var(--space-lg);
        background-color: var(--color-surface);
        box-shadow: var(--shadow-md);
        border-bottom: var(--border-default);
        position: relative;
        z-index: 100;
         color: rgb(7, 47, 223);
    }


    @keyframes fadeInTitle {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        .header {
            flex-direction: column;
            align-items: flex-start;
            padding: var(--space-sm);
        }

        .logo-area {
            justify-content: center;
            width: 100%;
        }

        .logo-area h1 {
            font-size: var(--font-lg);
        }
    }
</style>
