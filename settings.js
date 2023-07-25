const colorScheme = document.getElementById('colorSchemeModal');
const colorSchemeText = document.getElementById('colorSchemeText');

const darkModeCheckbox = document.getElementById('darkModeCheck')

colorSchemeText.addEventListener('click', function() {
    colorScheme.showModal();
})

darkModeCheckbox.addEventListener('click', function(e) {
    console.log(darkModeCheckbox.checked)
})
