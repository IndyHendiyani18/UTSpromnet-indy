document.addEventListener('DOMContentLoaded', function() {

    const moreInfoButtons = document.querySelectorAll('.more-info-button');

    moreInfoButtons.forEach(button => {
        button.addEventListener('click', function() {
         
            const sectionId = button.parentElement.querySelector('a').getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
