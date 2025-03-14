const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement
        const isOpen = trigger.classList.contains('open')

        if (isOpen) {
            trigger.classList.remove('open')
            acordeon.querySelector('.content').classList.remove('open')
        } else {
            trigger.classList.add('open')
            acordeon.querySelector('.content').classList.add('open')
        }
    })
})