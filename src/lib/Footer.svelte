<script>
	import { asset} from "$app/paths";

</script>
<footer class="footer">
    <img src={asset("/images/backgrounds/TaskBar.png")} alt="Footer background" class="footer-image">
</footer>


<style>
    .footer {
        position: relative;
        width: 100%;
        overflow: hidden;
        border-top: var(--border-default);
        box-shadow: var(--shadow-sm);
        animation: fadeInFooter var(--transition-slow) ease-in-out;
    }

    .footer-image {
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
        filter: brightness(1.2) contrast(0.90) saturate(1.2);
        transition: transform 0.4s ease, filter 0.4s ease;
    }

    .footer::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.08) 45%,
            transparent 80%
        );
        background-size: 200% 100%;
        animation: gradientScroll 8s linear infinite;
        pointer-events: none;
    }

    .footer:hover .footer-image {
        transform: scale(1.01);
        filter: brightness(1.1) contrast(1.12) saturate(1.2);
    }

    @keyframes fadeInFooter {
        from {
            opacity: 0;
            transform: translateY(10px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes gradientScroll {
        from {
            background-position: 200% 0;
        }

        to {
            background-position: -200% 0;
        }
    }

    @media (max-width: 768px) {
        .footer-image {
            min-height: 60px;
            object-fit: cover;
        }
    }
</style>