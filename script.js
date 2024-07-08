const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navItems = ['nav-1', 'nav-2', 'nav-3', 'nav-4', 'nav-5'].map(id => document.getElementById(id));

// Function to toggle classes for an element
function toggleClass(element, classToRemove, classToAdd) {
    element.classList.remove(classToRemove);
    element.classList.add(classToAdd);
}

// Function to toggle the navigation menu
function toggleNav() {
    // Toggle menu bars open/close
    menuBars.classList.toggle('change');
    // Toggle overlay active state
    overlay.classList.toggle('overlay-active');
    
    if (overlay.classList.contains('overlay-active')) {
        // Animate in overlay
        toggleClass(overlay, 'overlay-slide-left', 'overlay-slide-right');
        // Animate in nav items
        navItems.forEach((navItem, index) => {
            toggleClass(navItem, `slide-out-${index + 1}`, `slide-in-${index + 1}`);
        });
    } else {
        // Animate out overlay
        toggleClass(overlay, 'overlay-slide-right', 'overlay-slide-left');
        // Animate out nav items
        navItems.forEach((navItem, index) => {
            toggleClass(navItem, `slide-in-${index + 1}`, `slide-out-${index + 1}`);
        });
    }
}

// Add event listeners
[menuBars, ...navItems].forEach(item => item.addEventListener('click', toggleNav));
