const colorScheme = document.getElementById('colorSchemeModal');
const colorSchemeText = document.getElementById('colorSchemeText');

const darkModeCheckbox = document.getElementById('darkModeCheck')

colorSchemeText.addEventListener('click', function(e) {
    e.preventDefault();
    colorScheme.showModal();
})

darkModeCheckbox.addEventListener('click', function(e) {
    console.log(darkModeCheckbox.checked)
})
