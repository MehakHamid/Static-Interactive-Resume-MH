document.getElementById('toggle-skills').addEventListener('click', function() {
    const skillsList = document.getElementById('skills-list');
    if (skillsList.classList.contains('hidden')) {
        skillsList.classList.remove('hidden');
        this.textContent = 'Hide Skills'; // Change button text
    } else {
        skillsList.classList.add('hidden');
        this.textContent = 'Show Skills'; // Change button text
    }
});
