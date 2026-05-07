<footer class="footer">
    <img src="/images/backgrounds/TaskBar.png" alt="footer">
</footer>


<style>
    .footer {
        width: 100%;
        padding: var(--space-md);
        object-fit: fill; 
        text-align: center;
        font-family: var(--font-body);
        font-size: var(--font-sm);
        color: var(--text-tertiary);
        border-top: var(--border-default);
        box-shadow: var(--shadow-sm);
        position: relative;
        z-index: 10;
        animation: fadeInFooter var(--transition-slow) ease-in-out;
    }

    .footer::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        animation: gradientScroll 6s linear infinite;
    }

    @keyframes fadeInFooter {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @keyframes gradientScroll {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
    }

    @media (max-width: 768px) {
        .footer {
            padding: var(--space-sm);
            font-size: var(--font-xs);
            
        }
    }
</style>
