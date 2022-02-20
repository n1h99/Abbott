const stringToHTML = function (str, elementTag = 'div') {
    let dom = document.createElement(elementTag);
    dom.innerHTML = str;
    return dom;
};

// calendar
const calendarEvents = [
    {
        title: '12:00 Круглый стол специа',
        start: '2021-11-05T12:00:00',
        Color: '#009CDC',
        className: ['fc__bg-blue'],
        text: "<p>Суббота, 04 марта 2021 г. <br> с 12:00 по 12:25 (45 минут)</p>\n" +
            "                <span>\n" +
            "                Не позволяйте внешним обстоятельствам определять\n" +
            "                Ваше самоощущение. Невозможно контролировать внешние обстоятельства, но возможно влиять на то, какое\n" +
            "                значение Вы им придаете. Масштаб человека измеряется масштабом проблем, которые могут на него влиять.\n" +
            "           </span>",
    },
    {
        title: '14:00 Круглый стол специа',
        start: '2021-11-05T14:00:00',
        color: ' #D40030',
        className: ['fc__bg-red'],
        text: "<p>Суббота, 04 марта 2021 г. <br> с 12:00 по 12:25 (45 минут)</p>\n" +
            "                <span>\n" +
            "                Не позволяйте внешним обстоятельствам определять\n" +
            "                Ваше самоощущение. Невозможно контролировать внешние обстоятельства, но возможно влиять на то, какое\n" +
            "                значение Вы им придаете. Масштаб человека измеряется масштабом проблем, которые могут на него влиять.\n" +
            "           </span>",
    },
    {
        title: '16:00 Круглый стол специа',
        start: '2021-11-05T16:00:00',
        color: ' #D40030',
        className: ['fc__bg-red'],
        text: "<p>Суббота, 04 марта 2021 г. <br> с 12:00 по 12:25 (45 минут)</p>\n" +
            "                <span>\n" +
            "                Не позволяйте внешним обстоятельствам определять\n" +
            "                Ваше самоощущение. Невозможно контролировать внешние обстоятельства, но возможно влиять на то, какое\n" +
            "                значение Вы им придаете. Масштаб человека измеряется масштабом проблем, которые могут на него влиять.\n" +
            "           </span>",
    },
    {
        title: '18:00 Круглый стол специа',
        start: '2021-11-05T18:00:00',
        color: '#009CDC',
        className: ['fc__bg-blue'],
        text: "<p>Суббота, 04 марта 2021 г. <br> с 12:00 по 12:25 (45 минут)</p>\n" +
            "                <span>\n" +
            "                Не позволяйте внешним обстоятельствам определять\n" +
            "                Ваше самоощущение. Невозможно контролировать внешние обстоятельства, но возможно влиять на то, какое\n" +
            "                значение Вы им придаете. Масштаб человека измеряется масштабом проблем, которые могут на него влиять.\n" +
            "           </span>",
    },
    {
        title: '12:00 Круглый стол специа',
        start: '2021-11-09T12:00:00',
        color: '#509E38',
        className: ['fc__bg-green'],
        text: "<p>Суббота, 04 марта 2021 г. <br> с 12:00 по 12:25 (45 минут)</p>\n" +
            "                <span>\n" +
            "                Не позволяйте внешним обстоятельствам определять\n" +
            "                Ваше самоощущение. Невозможно контролировать внешние обстоятельства, но возможно влиять на то, какое\n" +
            "                значение Вы им придаете. Масштаб человека измеряется масштабом проблем, которые могут на него влиять.\n" +
            "           </span>",
    },
    {
        title: '18:00 Круглый стол специа',
        start: '2021-11-11T18:00:00',
        color: '#509E38',
        className: ['fc__bg-green'],
        text: "<p>Суббота, 04 марта 2021 г. <br> с 12:00 по 12:25 (45 минут)</p>\n" +
            "                <span>\n" +
            "                Не позволяйте внешним обстоятельствам определять\n" +
            "                Ваше самоощущение. Невозможно контролировать внешние обстоятельства, но возможно влиять на то, какое\n" +
            "                значение Вы им придаете. Масштаб человека измеряется масштабом проблем, которые могут на него влиять.\n" +
            "           </span>",
    },
    {
        title: '12:00 Круглый стол специа',
        start: '2021-11-15T12:00:00',
        color: '#D985B7',
        className: ['fc__bg-purple'],
        text: "<p>Суббота, 04 марта 2021 г. <br> с 12:00 по 12:25 (45 минут)</p>\n" +
            "                <span>\n" +
            "                Не позволяйте внешним обстоятельствам определять\n" +
            "                Ваше самоощущение. Невозможно контролировать внешние обстоятельства, но возможно влиять на то, какое\n" +
            "                значение Вы им придаете. Масштаб человека измеряется масштабом проблем, которые могут на него влиять.\n" +
            "           </span>",
    },
    {
        title: '18:00 Круглый стол специа',
        start: '2021-11-15T18:00:00',
        color: '#509E38',
        className: ['fc__bg-green'],
        text: "<p>Суббота, 04 марта 2021 г. <br> с 12:00 по 12:25 (45 минут)</p>\n" +
            "                <span>\n" +
            "                Не позволяйте внешним обстоятельствам определять\n" +
            "                Ваше самоощущение. Невозможно контролировать внешние обстоятельства, но возможно влиять на то, какое\n" +
            "                значение Вы им придаете. Масштаб человека измеряется масштабом проблем, которые могут на него влиять.\n" +
            "           </span>",
    },
    {
        title: '12:00 Круглый стол специа',
        start: '2021-11-26T12:00:00',
        color: '#D985B7',
        className: ['fc__bg-purple'],
        text: "<p>Суббота, 04 марта 2021 г. <br> с 12:00 по 12:25 (45 минут)</p>\n" +
            "                <span>\n" +
            "                Не позволяйте внешним обстоятельствам определять\n" +
            "                Ваше самоощущение. Невозможно контролировать внешние обстоятельства, но возможно влиять на то, какое\n" +
            "                значение Вы им придаете. Масштаб человека измеряется масштабом проблем, которые могут на него влиять.\n" +
            "           </span>",
    },
    {
        title: '14:00 Круглый стол специа',
        start: '2021-11-26T14:00:00',
        color: '#009CDC',
        className: ['fc__bg-blue'],
        text: "<p>Суббота, 04 марта 2021 г. <br> с 12:00 по 12:25 (45 минут)</p>\n" +
            "                <span>\n" +
            "                Не позволяйте внешним обстоятельствам определять\n" +
            "                Ваше самоощущение. Невозможно контролировать внешние обстоятельства, но возможно влиять на то, какое\n" +
            "                значение Вы им придаете. Масштаб человека измеряется масштабом проблем, которые могут на него влиять.\n" +
            "           </span>",
    },
    {
        title: '12:00 Круглый стол специа',
        start: '2022-11-05T12:00:00',
        text: "<p>Суббота, 04 марта 2021 г. <br> с 12:00 по 12:25 (45 минут)</p>\n" +
            "                <span>\n" +
            "                Не позволяйте внешним обстоятельствам определять\n" +
            "                Ваше самоощущение. Невозможно контролировать внешние обстоятельства, но возможно влиять на то, какое\n" +
            "                значение Вы им придаете. Масштаб человека измеряется масштабом проблем, которые могут на него влиять.\n" +
            "           </span>",
    },
    {
        title: '12:00 Круглый стол специа',
        start: '2023-11-05T12:00:00',
        text: "<p>Суббота, 11 марта 2023 г. <br> с 12:00 по 12:25 (45 минут)</p>\n" +
            "                <span>\n" +
            "                Не позволяйте внешним обстоятельствам определять\n" +
            "                Ваше самоощущение. Невозможно контролировать внешние обстоятельства, но возможно влиять на то, какое\n" +
            "                значение Вы им придаете. Масштаб человека измеряется масштабом проблем, которые могут на него влиять.\n" +
            "           </span>",
    },
]

const calendarMonths = [
    {
        title: 'Январь',
        id: 1
    },
    {
        title: 'Февраль',
        id: 2
    },
    {
        title: 'Март',
        id: 3
    },
    {
        title: 'Апрель',
        id: 4
    },
    {
        title: 'Май',
        id: 5
    },
    {
        title: 'Июнь',
        id: 6
    },
    {
        title: 'Июль',
        id: 7
    },
    {
        title: 'Август',
        id: 8
    },
    {
        title: 'Сентябрь',
        id: 9
    },
    {
        title: 'Октябрь',
        id: 10
    },
    {
        title: 'Ноябрь',
        id: 11
    },
    {
        title: 'Декабрь',
        id: 12
    }
]

var fullCalendar
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    fullCalendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: '2021-11-01',
        selectable: true,
        locale: 'ru',
        headerToolbar: {
            right: '',
            left: '',
            center: ''
        },
        views: {
            year: {
                type: 'listYear',
                dateIncrement: {years: 1},
                slotDuration: {months: 1},
            }
        },
        events: calendarEvents,


        eventClick: function (info) {
            const event = calendarEvents.find(event => new Date(event.start).getTime() === info.event.start.getTime() && event.title === info.event.title)
            myPopup(event)
        }
    });

    fullCalendar.render();
    onSelectDate()
});
const modalTitle = document.querySelector(".calendar__popup-title")
const modalText = document.querySelector(".calendar__popup-text")
const modalCalendar = document.querySelector('.calendar__popup')
const myPopup = (event) => {
    modalTitle.innerHTML = event.title.trim()
    modalText.innerHTML = event.text.trim()
    modalCalendar.classList.add('active-popup-calendar')
}
const calendarBg = document.querySelector('.calendar__bg')
calendarBg.addEventListener('click', ()=> {
    modalCalendar.classList.remove('active-popup-calendar')
})


const calendarYearSelect = document.querySelector('#calendarYearSelect')
const calendarMonthSelect = document.querySelector('#calendarMonthSelect')

const onSelectDate = () => {
    const year = calendarYearSelect.value
    const month = calendarMonthSelect.value
    const date = `${year}-${month < 10 ? `0${month}` : month}-01T00:00:00Z`
    fullCalendar.gotoDate(date)
}


[calendarYearSelect, calendarMonthSelect].forEach(element => {
    element.addEventListener('change', onSelectDate)
})

const addedYears = {}
calendarEvents.forEach(ce => {
    const year = ce.start.slice(0, 4)
    if (!addedYears[year]) {
        addedYears[year] = true
        const option = stringToHTML(`
            ${year}
        `, 'option')
        option.setAttribute('value', year)
        calendarYearSelect.appendChild(option)
    }
})
calendarMonths.forEach(cm => {
    const option = stringToHTML(`
        ${cm.title}
    `, 'option')
    option.setAttribute('value', cm.id)
    calendarMonthSelect.appendChild(option)
})

// cal
const activeSwitch = () => {
    const firstOption = document.querySelector('.switcher-option-one');
    const secondOption = document.querySelector('.switcher-option-two');

    if (firstOption.classList.contains('active')) {
        firstOption.classList.remove('active')
        secondOption.classList.add('active')
        fullCalendar.changeView('year')
    } else {
        firstOption.classList.add('active')
        secondOption.classList.remove('active')
        fullCalendar.changeView('dayGridMonth')
    }
}

