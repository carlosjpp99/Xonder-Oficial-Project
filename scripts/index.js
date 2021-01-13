
window.onclick = function (event) {
    const dropdowns = document.getElementsByClassName('menu')
    if (event.target.matches('.botonMennu img')) {
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i]
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show')
            }
        }
    } else {
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i]
            if (!openDropdown.classList.contains('show')) {
                openDropdown.classList.add('show')
            }
        }
    }
}