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

// Add funny messages when hovering over "No" button
const noMessages = [
    "Nice try! 😏",
    "Not this time! 💫",
    "Almost got me! 🏃‍♂️",
    "Too slow! 🦋",
    "Nope! 🙈",
    "Try again! 🎯",
    "Getting tired? 😅",
    "Still here! 🌟",
    "Can't catch me! 🦄"
];

let messageCount = 0;
document.getElementById('no-btn').addEventListener('mouseover', function() {
    // Existing movement code
    const btn = this;
    const container = document.querySelector('.valentine-buttons');
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    const minDistance = 100;
    const currentX = btnRect.left - containerRect.left;
    const currentY = btnRect.top - containerRect.top;

    while (Math.abs(randomX - currentX) < minDistance) {
        randomX = Math.random() * maxX;
    }

    btn.style.transition = 'all 0.3s ease';
    btn.style.position = 'absolute';
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;

    // Add floating message
    const message = document.createElement('div');
    message.textContent = noMessages[messageCount % noMessages.length];
    message.style.position = 'absolute';
    message.style.left = currentX + 'px';
    message.style.top = (currentY - 30) + 'px';
    message.style.animation = 'floatAndFade 1s ease-out forwards';
    message.style.color = '#ff4e50';
    message.style.fontSize = '1.2rem';
    message.style.pointerEvents = 'none';
    message.style.zIndex = '1000';
    container.appendChild(message);

    // Remove message after animation
    setTimeout(() => message.remove(), 1000);
    messageCount++;
});

// "Yes" button click handler
document.getElementById('yes-btn').addEventListener('click', function() {
    const message = document.querySelector('.valentine-message');
    
    // Create heart shower
    for (let i = 0; i < 50; i++) {
        createHeart();
    }
    
    // Change message with typing effect
    message.innerHTML = '';
    const successText = "I love you so much! You're the best! ❤️";
    let charIndex = 0;
    
    function typeText() {
        if (charIndex < successText.length) {
            message.innerHTML += successText.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 50);
        }
    }
    
    typeText();
});

// Heart creation function
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 1) + 's';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => heart.remove(), 3000);
}

// Add this to your existing style element or create a new one
const newStyle = document.createElement('style');
newStyle.textContent = `
    @keyframes floatAndFade {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-20px); opacity: 0; }
    }
    
    .floating-heart {
        position: fixed;
        top: -20px;
        animation: heartFloat 3s ease-in forwards;
        z-index: 1000;
        pointer-events: none;
    }
    
    @keyframes heartFloat {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(newStyle);
