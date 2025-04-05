document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.querySelector('.mode-switcher')
    const arrowBtn = document.querySelector('.arrow-btn__icon')
    const items = document.querySelectorAll('.projects-item')
    let isOpen = false

    // test
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

    const toggleTheme = () => {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.setAttribute('data-theme', 'dark')
        } else {
            document.body.removeAttribute('data-theme', 'dark')
        }
    }

    // Определяем сколько элементов должно быть видно по умолчанию
    const getVisibleCount = () => {
        if (window.matchMedia('(min-width: 1024px)').matches) return 3
        if (window.matchMedia('(min-width: 768px)').matches) return 2
        return 1
    }

    const updateVisibleItems = () => {
        if (!isOpen) {
            const visibleCount = getVisibleCount()
            items.forEach((item, index) => {
                if (index < visibleCount) {
                    item.style.display = 'grid'
                    item.style.opacity = '1'
                    item.style.transform = 'translateY(0)'
                } else {
                    // item.style.display = ''
                    // item.style.opacity = '0'
                    // item.style.transform = 'translateY(20px)'
                    item.style.opacity = '0'
                    item.style.transform = 'translateY(20px)'
                    setTimeout(() => {
                        item.style.display = ''
                    }, 300)
                }
            })
        }
    }
    // Option 1
    // const toggleList = () => {
    //     // isOpen = !isOpen
    //     // items.forEach((item, index) => {
    //     //     item.style.display = isOpen ? 'grid' : ''
    //     // })

    //     isOpen = !isOpen
    //     if (isOpen) {
    //         items.forEach((item, index) => {
    //             const delay =
    //                 Math.abs(index - Math.floor(items.length / 2)) * 100
    //             setTimeout(() => {
    //                 // item.style.display = isOpen ? 'grid' : ''
    //                 item.style.display = 'grid'
    //                 void item.offsetWidth // Рефлоу
    //                 item.style.opacity = '1'
    //                 item.style.transform = 'translateY(0)'
    //             }, 100 * index)
    //         })
    //     } else {
    //         ;[...items].reverse().forEach((item, index) => {
    //             item.style.transform = 'translateY(20px)'
    //             setTimeout(() => {
    //                 item.style.display = ''
    //                 if (item.style.display === 'none') {
    //                     item.style.opacity = '0'
    //                 }
    //                 void item.offsetWidth
    //             }, 100 * index)
    //         })
    //     }
    // }

    // Option 2
    const toggleList = () => {
        isOpen = !isOpen

        arrowBtn.classList.toggle('rotated', isOpen)

        if (isOpen) {
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.display = 'grid'
                    void item.offsetWidth // Триггерим reflow
                    item.style.opacity = '1'
                    item.style.transform = 'translateY(0)'
                }, 50 * index) // Каскадная задержка
            })
        } else {
            updateVisibleItems()
        }
    }

    // Обработчик изменения размера окна
    window.addEventListener('resize', () => {
        updateVisibleItems()
    })

    arrowBtn.addEventListener('click', () => {
        toggleList()
    })

    toggleTheme()
})
