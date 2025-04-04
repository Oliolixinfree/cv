document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.querySelector('.mode-switcher')
    const arrowBtn = document.querySelector('.close-open')
    const items = document.querySelectorAll('.projects-item')
    const isOpen = false

    const calculateAge = () => {
        const today = new Date()
        const birth = new Date('1997-07-06')

        let age = today.getFullYear() - birth.getFullYear()
        const monthDiff = today.getMonth() - birth.getMonth()
        const dayDiff = today.getDate() - birth.getDate()

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--
        }

        return age
    }

    document.querySelector('.yo').textContent = calculateAge()

    themeSwitcher.addEventListener('click', () => {
        if (localStorage.getItem('theme') === 'dark') {
            localStorage.removeItem('theme')
        } else {
            localStorage.setItem('theme', 'dark')
        }

        toggleTheme()
    })

    arrowBtn.addEventListener('click', () => {
        toggleArrowBtn()
    })

    const toggleTheme = () => {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.setAttribute('data-theme', 'dark')
        } else {
            document.body.removeAttribute('data-theme', 'dark')
        }
    }

    const toggleArrowBtn = () => {
        items.forEach((item) => {
            if (item.classList.contains('hidden')) {
                item.classList.remove('hidden')
            } else {
                item.classList.add('hidden')
            }
        })
        console.log(items)
        console.log(isOpen)
    }

    toggleTheme()
})
