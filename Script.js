document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for section links (if you add navigation)
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Button hover effect using JavaScript
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#45a049';  // Change button color on hover
        });

        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#4CAF50';  // Revert back to original color
        });
    });

    // Print a message when the portfolio button is clicked
    const portfolioButton = document.querySelector('a[href="https://hrdvfolio.netlify.app/"]');
    if (portfolioButton) {
        portfolioButton.addEventListener('click', function() {
            console.log("Portfolio button clicked! Navigating to the portfolio website.");
        });
    }
});
