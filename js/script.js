// ============================================
// Harmony Instruments Website - JavaScript
// ============================================

// Form validation for Enquiry Form
function validateForm() {
    // Get form elements
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const product = document.getElementById("product").value;
    const enquiryType = document.getElementById("enquiry-type").value;
    const message = document.getElementById("message").value.trim();

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Phone validation regex pattern (basic)
    const phonePattern = /^[\d\s\-\+()]{10,}$/;

    // Validate full name
    if (fullname === "") {
        alert("Please enter your full name");
        return false;
    }

    // Validate full name has at least 3 characters
    if (fullname.length < 3) {
        alert("Full name must be at least 3 characters long");
        return false;
    }

    // Validate email
    if (email === "") {
        alert("Please enter your email address");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Validate phone
    if (phone === "") {
        alert("Please enter your phone number");
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number");
        return false;
    }

    // Validate product selection
    if (product === "") {
        alert("Please select a product or service");
        return false;
    }

    // Validate enquiry type
    if (enquiryType === "") {
        alert("Please select the type of enquiry");
        return false;
    }

    // Validate message
    if (message === "") {
        alert("Please enter your enquiry message");
        return false;
    }

    if (message.length < 10) {
        alert("Please provide more details in your enquiry (at least 10 characters)");
        return false;
    }

    // If all validations pass, show success message
    showEnquirySuccess();
    
    return false; // Return false to prevent form submission for demo
}

// Show success message for enquiry form
function showEnquirySuccess() {
    // Hide the form
    document.querySelector(".enquiry-form").style.display = "none";
    
    // Generate reference number
    const refNumber = "ENQ" + Date.now();
    
    // Show success message
    const successMsg = document.getElementById("successMessage");
    document.getElementById("refNumber").textContent = refNumber;
    successMsg.style.display = "block";

    // Scroll to success message
    successMsg.scrollIntoView({ behavior: "smooth" });

    // Reset after 3 seconds (optional - you can comment this out)
    setTimeout(function() {
        // Form will remain hidden to show success message
    }, 3000);
}

// Form validation for Contact Form
function validateContactForm() {
    // Get form elements
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Phone validation regex pattern
    const phonePattern = /^[\d\s\-\+()]{10,}$/;

    // Validate name
    if (name === "") {
        alert("Please enter your full name");
        return false;
    }

    if (name.length < 3) {
        alert("Full name must be at least 3 characters long");
        return false;
    }

    // Validate email
    if (email === "") {
        alert("Please enter your email address");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Validate phone
    if (phone === "") {
        alert("Please enter your phone number");
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number");
        return false;
    }

    // Validate subject
    if (subject === "") {
        alert("Please enter a subject for your message");
        return false;
    }

    if (subject.length < 5) {
        alert("Subject must be at least 5 characters long");
        return false;
    }

    // Validate message
    if (message === "") {
        alert("Please enter your message");
        return false;
    }

    if (message.length < 10) {
        alert("Please provide more details in your message (at least 10 characters)");
        return false;
    }

    // If all validations pass, show success message
    showContactSuccess();
    
    return false; // Return false to prevent form submission for demo
}

// Show success message for contact form
function showContactSuccess() {
    // Hide the form
    document.querySelector(".contact-form").style.display = "none";
    
    // Show success message
    const successMsg = document.getElementById("contactSuccessMessage");
    successMsg.style.display = "block";

    // Scroll to success message
    successMsg.scrollIntoView({ behavior: "smooth" });
}

// Format phone number as user types
function formatPhoneNumber(inputElement) {
    let value = inputElement.value.replace(/\D/g, '');
    
    if (value.length > 0) {
        if (value.length <= 3) {
            value = value;
        } else if (value.length <= 6) {
            value = value.substring(0, 3) + ' ' + value.substring(3);
        } else if (value.length <= 10) {
            value = value.substring(0, 3) + ' ' + value.substring(3, 6) + ' ' + value.substring(6);
        } else {
            value = value.substring(0, 3) + ' ' + value.substring(3, 6) + ' ' + value.substring(6, 10) + ' ' + value.substring(10, 13);
        }
    }
    
    inputElement.value = value;
}

// Smooth scroll function for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if link is an internal anchor
            const href = this.getAttribute('href');
            
            // Only prevent default for anchor links on same page
            if (href.startsWith('#')) {
                e.preventDefault();
                
                // Get target element
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                // Scroll to target if it exists
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Set active navigation link based on current page
    setActiveNavLink();
});

// Set active navigation link
function setActiveNavLink() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page link
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Email validation helper function
function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// Phone number validation helper function
function isValidPhone(phone) {
    const pattern = /^[\d\s\-\+()]{10,}$/;
    return pattern.test(phone);
}

// Trim whitespace from input fields
document.addEventListener('DOMContentLoaded', function() {
    const inputFields = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
    
    inputFields.forEach(field => {
        field.addEventListener('blur', function() {
            this.value = this.value.trim();
        });
    });
});

// Add animation on scroll
function observeElements() {
    // Get all elements to observe
    const elements = document.querySelectorAll('.product-card, .feature, .team-member, .location-card');
    
    // Observer configuration
    const observerConfig = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    // Create observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerConfig);
    
    // Observe elements
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize animations when page loads
window.addEventListener('load', observeElements);

// Console message (Easter egg)
console.log('%c🎵 Welcome to Harmony Instruments Website! 🎵', 'color: #27ae60; font-size: 16px; font-weight: bold;');
console.log('Built with HTML, CSS, and JavaScript');

// ============================================
// END OF JAVASCRIPT
// ============================================
