document.addEventListener('DOMContentLoaded', () => {
    // Initialize snowfall
    createSnowflakes();
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
    // Animate present opening
    this.style.transform = 'translateX(-50%) scale(0.1) translateY(-1000px)';
    this.style.opacity = '0';
    
    // Show Christmas content after present disappears
    setTimeout(() => {
        this.style.display = 'none';
        const christmasContent = document.getElementById('christmas-content');
        christmasContent.classList.remove('hidden');
        setTimeout(() => {
            christmasContent.classList.add('visible');
            // Show continue button after content is visible
            setTimeout(() => {
                document.getElementById('continue-btn').classList.remove('hidden');
            }, 2000);
        }, 100);
    }, 500);
});

// Continue button click handler
document.getElementById('continue-btn').addEventListener('click', function() {
    // Hide Christmas content and decorations
    document.getElementById('christmas-content').classList.remove('visible');
    document.querySelector('.christmas-decorations').classList.add('hidden');
    
    // Show Valentine's content and decorations
    setTimeout(() => {
        document.getElementById('christmas-content').classList.add('hidden');
        document.querySelector('.valentine-decorations').classList.remove('hidden');
        document.getElementById('valentine-content').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('valentine-content').classList.add('visible');
        }, 100);
    }, 500);
});

// Make the "No" button run away with more controlled movement
document.getElementById('no-btn').addEventListener('mouseover', function() {
    const btn = this;
    const container = document.querySelector('.valentine-buttons');
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    // Calculate maximum positions while keeping button within container
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    // Generate new random position
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    // Ensure minimum movement distance but not too far
    const minDistance = 100; // Reduced minimum pixels to move
    const currentX = btnRect.left - containerRect.left;
    const currentY = btnRect.top - containerRect.top;

    // Adjust position if too close to current position
    while (Math.abs(randomX - currentX) < minDistance) {
        randomX = Math.random() * maxX;
    }

    btn.style.transition = 'all 0.3s ease';
    btn.style.position = 'absolute';
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
});

// "Yes" button click handler
document.getElementById('yes-btn').addEventListener('click', function() {
    const message = document.querySelector('.valentine-message');
    message.innerHTML = '<p class="success-message">I love you! ❤️</p>';
});
