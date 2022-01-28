// header menu

const menuBtn = document.getElementsByClassName('header__burger')[0]
const menu = document.getElementsByClassName('header__items')[0]
const menuClose = document.getElementsByClassName('header__close')[0]

menuBtn.onclick = function () {
    menu.style.display = "grid"
    menuClose.style.display = "block"
    menuBtn.style.display = "none"
}
menuClose.onclick = function () {
    menu.style.display = "none"
    menuBtn.style.display = "block"
    menuClose.style.display = "none"
}

// header accordion
document.querySelectorAll('.header__menu').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('header-active')) {
            parent.classList.remove('header-active');
        }else {
            document
                .querySelectorAll('.header__items')
                .forEach((child) => child.classList.remove('header-active'))
            parent.classList.toggle('header-active');
        }
    })
)

// calendar


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: '2021-11-01',
        selectable: true,
        locale: 'ru',
        headerToolbar: {
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            {
                title: 'Круглый стол',
                start: '2021-11-05T12:00:00',
            },
            {
                title: 'Круглый стол',
                start: '2021-11-05T14:00:00',
            },
            {
                title: 'Круглый стол',
                start: '2021-11-05T16:00:00',
            },
            {
                title: 'Круглый стол',
                start: '2021-11-05T18:00:00',
            },
            {
                title: 'Круглый стол',
                start: '2021-11-09T12:00:00',
            },
            {
                title: 'Круглый стол',
                start: '2021-11-11T18:00:00',
            },
            {
                title: 'Круглый стол',
                start: '2021-11-15T12:00:00',
            },
            {
                title: 'Круглый стол',
                start: '2021-11-15T18:00:00',
            },
            {
                title: 'Круглый стол',
                start: '2021-11-26T12:00:00',
            },
            {
                title: 'Круглый стол',
                start: '2021-11-26T14:00:00',
            },
        ]
    });

    calendar.render();
});

