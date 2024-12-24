document.addEventListener('DOMContentLoaded', () => {
    // You can add more animations or interactivity here.
    console.log('Merry Christmas!');
});

// Create snowfall effect
function createSnowflakes() {
    const snowflakesCount = 50;
    const container = document.body;
    
    for (let i = 0; i < snowflakesCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❅';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.opacity = Math.random();
        snowflake.style.animation = `fall ${Math.random() * 10 + 5}s linear infinite`;
        container.appendChild(snowflake);
    }
}

// Add falling animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% {
            transform: translateY(-10vh) rotate(0deg);
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Present click handler
document.getElementById('present').addEventListener('click', function() {
    // Animate present opening (modified to maintain centering)
    this.style.transform = 'translateX(-50%) scale(0.1) translateY(-1000px)';
    this.style.opacity = '0';
    
    // Show content after present disappears
    setTimeout(() => {
        this.style.display = 'none';
        const content = document.getElementById('content');
        content.classList.remove('hidden');
        setTimeout(() => {
            content.classList.add('visible');
        }, 100);
    }, 500);
});

// Initialize snowfall
createSnowflakes();
