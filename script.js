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
    
    // Simplified click effect - no complex ripple that might interfere
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        // Simple visual feedback on hover
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Temporarily disabled complex card hover effects that might interfere with clicks
    // const card = document.querySelector('.card');
    // 
    // card.addEventListener('mousemove', function(e) {
    //     const rect = this.getBoundingClientRect();
    //     const x = e.clientX - rect.left;
    //     const y = e.clientY - rect.top;
    //     
    //     const centerX = rect.width / 2;
    //     const centerY = rect.height / 2;
    //     
    //     const rotateX = (y - centerY) / 10;
    //     const rotateY = (centerX - x) / 10;
    //     
    //     this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    // });
    // 
    // card.addEventListener('mouseleave', function() {
    //     this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    // });
    
    // Animate elements on load
    const animateOnLoad = () => {
        const avatar = document.querySelector('.avatar');
        const name = document.querySelector('.name');
        const socialLinks = document.querySelectorAll('.social-link');
        
        // Animate avatar
        avatar.style.opacity = '0';
        avatar.style.transform = 'scale(0.5)';
        avatar.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        
        setTimeout(() => {
            avatar.style.opacity = '1';
            avatar.style.transform = 'scale(1)';
        }, 200);
        
        // Animate name
        name.style.opacity = '0';
        name.style.transform = 'translateY(20px)';
        name.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            name.style.opacity = '1';
            name.style.transform = 'translateY(0)';
        }, 500);
        
        // Simplified animation for social links
        socialLinks.forEach((link, index) => {
            setTimeout(() => {
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
