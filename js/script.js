// Theme Toggle
document.addEventListener('DOMContentLoaded', function() {
  // Check for saved theme preference or use user's system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
    updateThemeIcon(true);
  }
  
  // Theme toggle button event listener
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', toggleTheme);
  
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });
  
  // Close mobile menu when clicking a link
  const mobileLinks = document.querySelectorAll('#mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
    });
  });
  
  // Scroll animations
  const scrollElements = document.querySelectorAll('.scroll-element');
  
  function handleScrollAnimation() {
    scrollElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.clientHeight;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - elementHeight / 3) {
        element.classList.add('fade-in');
      }
    });
  }
  
  // Run once on page load
  handleScrollAnimation();
  
  // Add event listener for scroll
  window.addEventListener('scroll', handleScrollAnimation);
  
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 80) {
      // Scrolling down & past the hero section
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up or at the top
      navbar.style.transform = 'translateY(0)';
    }
    
    // Change navbar style based on scroll position
    if (scrollTop > 50) {
      navbar.style.padding = '10px 0';
      navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.padding = '15px 0';
      navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
  });
});

// Toggle between light and dark themes
function toggleTheme() {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  updateThemeIcon(isDarkMode);
}

// Update the theme toggle icon based on current theme
function updateThemeIcon(isDarkMode) {
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.innerHTML = isDarkMode 
    ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
}