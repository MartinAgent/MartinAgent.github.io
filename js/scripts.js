/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    const navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const skillsDropdown = document.body.querySelector('#skillsDropdown');
        const dropdownItems = document.body.querySelectorAll('.dropdown-item');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);



    // hover icon shows text
    const telIcon = document.body.querySelector('#phoneIcon');
    if (telIcon) {
        telIcon.addEventListener('mouseenter', () => {
            const contactMe = document.body.querySelector('#contactMe');
            if (contactMe) {
                contactMe.innerHTML = "My phone : +33761096401";
            };
        });
        telIcon.addEventListener('mouseleave', () => {
            const contactMe = document.body.querySelector('#contactMe');
            if (contactMe) {
                contactMe.innerHTML = "Feel free to contact me !";
            };
        });
    };

    // hover icon shows text
    const mailIcon = document.body.querySelector('#mailIcon');
    if (mailIcon) {
        mailIcon.addEventListener('mouseenter', () => {
            const contactMe = document.body.querySelector('#contactMe');
            if (contactMe) {
                contactMe.innerHTML = "My email : martinblanckaert@yahoo.fr";
            };
        });
        mailIcon.addEventListener('mouseleave', () => {
            const contactMe = document.body.querySelector('#contactMe');
            if (contactMe) {
                contactMe.innerHTML = "Feel free to contact me !";
            };
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Duality coin — spins a turn and a half each click so it reads as a real
    // flip rather than a 180 degree toggle. Rotation accumulates instead of
    // resetting, so it always spins forwards.
    const coin = document.getElementById('dualityCoin');
    if (coin) {
        let spin = 0;
        coin.addEventListener('click', () => {
            spin += 540;
            coin.style.transform = 'rotateY(' + spin + 'deg)';
            const flipped = (spin / 180) % 2 === 1;
            coin.classList.toggle('is-flipped', flipped);
            coin.setAttribute('aria-pressed', String(flipped));
        });
    }

    // Portfolio modal videos (replacing what used to be GIFs): a <video
    // autoplay> inside a Bootstrap modal that starts out display:none does
    // not reliably autoplay once the modal opens, so play/pause it explicitly
    // on Bootstrap's own show/hide events. Resetting on hide means it starts
    // from frame one every time the modal is reopened, same as a GIF would.
    document.querySelectorAll('.portfolio-modal').forEach(modal => {
        const videos = modal.querySelectorAll('video');
        if (!videos.length) return;
        modal.addEventListener('shown.bs.modal', () => {
            videos.forEach(v => { v.play().catch(() => {}); });
        });
        modal.addEventListener('hide.bs.modal', () => {
            videos.forEach(v => { v.pause(); v.currentTime = 0; });
        });
    });

    const navPlaceholder = document.getElementById('mainNav');
    const cachedNav = localStorage.getItem('nav');
    if (cachedNav) {
        navPlaceholder.innerHTML = cachedNav;
        navPlaceholder.style.visibility = 'visible';
    }

    const resumePlaceholder = document.getElementById('resumeModal');
    const cachedResume = localStorage.getItem('resume');
    if (cachedResume) {
        resumePlaceholder.innerHTML = cachedResume;
        resumePlaceholder.style.visibility = 'visible';
    }

    const footerPlaceholder = document.getElementById('footer-placeholder');
    const cachedFooter = localStorage.getItem('footer');
    if (cachedFooter) {
        footerPlaceholder.innerHTML = cachedFooter;
        footerPlaceholder.style.visibility = 'visible';
    }

    fetch('components/navigation.html')
        .then(response => response.text())
        .then(data => {
            navPlaceholder.innerHTML = data;
            navPlaceholder.style.visibility = 'visible';
            localStorage.setItem('nav', data);
            highlightActiveNavLink();
        })
        .catch(error => console.error('Error loading navigation:', error));
    fetch('components/resume.html')
        .then(response => response.text())
        .then(data => {
            resumePlaceholder.innerHTML = data;
            resumePlaceholder.style.visibility = 'visible';
            localStorage.setItem('resume', data);
            highlightActiveNavLink();
        })
        .catch(error => console.error('Error loading resume:', error));
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            footerPlaceholder.innerHTML = data;
            footerPlaceholder.style.visibility = 'visible';
            localStorage.setItem('footer', data);
            highlightActiveNavLink();
        })
        .catch(error => console.error('Error loading footer:', error));

});

// RESUME MODAL SECTION
function openModal() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("resumeModal").style.display = "block"
    document.getElementById("resumeModal").classList.add("show")
}

function closeModal() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("resumeModal").style.display = "none"
    document.getElementById("resumeModal").classList.remove("show")
}

// Get the modal
var modal = document.getElementById('resumeModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        closeModal()
    }
}

// HEADER & FOOTER
function highlightActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link'); // Select all navigation links
    const currentPath = window.location.href; // Get the current page path

    navLinks.forEach(link => {
        // Check if the link's href matches the current path
        if (link.href.split('#')[0] === currentPath.split('#')[0] && link.href.split('#')[1] == null) {
            link.classList.add("active")
        } else {
            link.classList.remove("active")
        }
    });
}


/*
window.onload = function() {

    var pageTitle = document.title;
    var attentionMessage = 'Looking for an internship...';
    var blinkEvent = null;

    document.addEventListener('visibilitychange', function(e) {
        var isPageActive = !document.hidden;

        if(!isPageActive){
            blink();
        }else {
            document.title = pageTitle;
            clearInterval(blinkEvent);
        }
    });

    function blink(){
        blinkEvent = setInterval(function() {
            if(document.title === attentionMessage){
                document.title = pageTitle;
            }else {
                document.title = attentionMessage;
            }
        }, 5000);
    }
};*/
