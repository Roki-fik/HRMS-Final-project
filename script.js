let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function showHome() {
    document.querySelector('.slideshow-container').style.display = 'block';
    document.querySelector('.employee-section').style.display = 'flex';
    document.querySelector('.vacancy-container').style.display = 'none';
    document.querySelector('.contact-container').style.display = 'none';
    document.querySelector('.about-container').style.display = 'none';
}

function showAbout() {
    document.querySelector('.slideshow-container').style.display = 'none';
    document.querySelector('.about-container').style.display = 'block';
    document.querySelector('.employee-section').style.display = 'none';
    document.querySelector('.vacancy-container').style.display = 'none';
    document.querySelector('.contact-container').style.display = 'none';
}

function showVacancy() {
    document.querySelector('.slideshow-container').style.display = 'none';
    document.querySelector('.about-container').style.display = 'none';
    document.querySelector('.employee-section').style.display = 'none';
    document.querySelector('.vacancy-container').style.display = 'block';
    document.querySelector('.contact-container').style.display = 'none';
}

function showContact() {
    document.querySelector('.slideshow-container').style.display = 'none';
    document.querySelector('.about-container').style.display = 'none';
    document.querySelector('.employee-section').style.display = 'none';
    document.querySelector('.vacancy-container').style.display = 'none';
    document.querySelector('.contact-container').style.display = 'block';
}

function toggleReadMore(role) {
    const moreText = document.querySelector(`.more-text.${role}`);
    const container = moreText.closest('.employee-container');
    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'block';
        container.classList.add('expanded');
    } else {
        moreText.style.display = 'none';
        container.classList.remove('expanded');
    }
}

function toggleJobDescription(jobId) {
    const jobDescription = document.querySelector(`.job-description.${jobId}`);
    if (jobDescription.style.display === 'none' || jobDescription.style.display === '') {
        jobDescription.style.display = 'block';
    } else {
        jobDescription.style.display = 'none';
    }
}

function showPreviousNews() {
    // Logic to display previous news
}

function showNextNews() {
    // Logic to display next news
}

function showPreviousProject() {
    // Logic to display previous project
}

function showNextProject() {
    // Logic to display next project
}

function showPreviousOngoingProject() {
    // Logic to display previous ongoing project
}

function showNextOngoingProject() {
    // Logic to display next ongoing project
}

function showPreviousRewardedEmployee() {
    // Logic to display previous rewarded employee
}

function showNextRewardedEmployee() {
    // Logic to display next rewarded employee
}

document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function() {
        const description = this.nextElementSibling;
        if (description.style.display === 'none' || description.style.display === '') {
            description.style.display = 'block';
        } else {
            description.style.display = 'none';
        }
    });
});
function showLoginForm() {
    const role = document.getElementById('role').value;
    const forms = document.querySelectorAll('.login-form');
    forms.forEach(form => form.style.display = 'none');
    if (role) {
        document.getElementById(`${role}-login`).style.display = 'block';
    }
}
function showLoginForm() {
    const role = document.getElementById('role').value;
    const forms = document.querySelectorAll('.login-form');
    forms.forEach(form => form.style.display = 'none');
    if (role) {
        const loginForm = document.getElementById(`${role}-login`);
        loginForm.style.display = 'block';

        // Add event listener to the form's submit button
        const submitButton = loginForm.querySelector('button[type="submit"]');
        submitButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default form submission
            if (role === 'employee') {
                window.location.href = 'employe.html';
            }
            // Add additional redirection logic for other roles if needed
        });
    }
}
function showLoginForm() {
    const role = document.getElementById('role').value;
    const forms = document.querySelectorAll('.login-form');
    forms.forEach(form => form.style.display = 'none');
    if (role) {
        const loginForm = document.getElementById(`${role}-login`);
        loginForm.style.display = 'block';

        // Add event listener to the form's submit button
        const submitButton = loginForm.querySelector('button[type="submit"]');
        submitButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default form submission
            if (role === 'employee') {
                window.location.href = 'employe.html';
            } else if (role === 'director') {
                window.location.href = 'director.html';
            }
            // Add additional redirection logic for other roles if needed
        });
    }
}