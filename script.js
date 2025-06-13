// Interactive elements and animations
document.addEventListener('DOMContentLoaded', function() {
    // Add parallax effect to floating circles
    const circles = document.querySelectorAll('.floating-circle');
    
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        circles.forEach((circle, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            circle.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    // Add click animation to social links
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add hover effect to card
    const card = document.querySelector('.card');
    
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
    
    // Animate elements on load
    const animateOnLoad = () => {
        const avatar = document.querySelector('.avatar');
        const name = document.querySelector('.name');
        const socialLinks = document.querySelectorAll('.social-link');
        
        // Animate avatar
        avatar.style.opacity = '0';
        avatar.style.transform = 'scale(0.5)';
        
        setTimeout(() => {
            avatar.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            avatar.style.opacity = '1';
            avatar.style.transform = 'scale(1)';
        }, 200);
        
        // Animate name
        setTimeout(() => {
            name.style.opacity = '0';
            name.style.transform = 'translateY(20px)';
            name.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                name.style.opacity = '1';
                name.style.transform = 'translateY(0)';
            }, 100);
        }, 400);
        
        // Animate social links
        socialLinks.forEach((link, index) => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                link.style.transition = 'all 0.6s ease';
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, 600 + (index * 100));
        });
    };
    
    animateOnLoad();
});

// Add ripple effect styles dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
