const monthYear = document.getElementById('month-year');
const calendarDays = document.getElementById('calendar-days');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentDate = new Date();

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const today = new Date();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    monthYear.textContent = `${monthNames[month]} ${year}`;
    calendarDays.innerHTML = '';

    function createCell(day, options = {}) {
        const div = document.createElement('div');
        div.textContent = day;
        div.style.textAlign = 'center';
        div.style.padding = '0.6rem 0';
        div.style.borderRadius = '9999px';
        div.style.fontWeight = 'normal';
        div.style.color = 'white';
        div.style.fontSize = '0.875rem';
        if (options.isSunday) {
            div.style.color = 'orangered';
        }
        if (options.otherMonth) {
            div.style.color = '#4b5563';
        }
        if (options.today) {
            div.style.background = '#4b5563';
            div.style.fontWeight = 'bold';
        }
        return div;
    }

    for (let i = firstDay; i > 0; i--) {
        calendarDays.appendChild(createCell(prevLastDate - i + 1, { otherMonth: true }));
    }

    for (let i = 1; i <= lastDate; i++) {
        const isToday =
            i === today.getDate() && month === today.getMonth() && year === today.getFullYear();
        const dayOfWeek = new Date(year, month, i).getDay();
        const isSunday = dayOfWeek === 0;
        calendarDays.appendChild(createCell(i, { today: isToday, isSunday }));
    }

    const totalCells = firstDay + lastDate;
    const nextDays = 7 - (totalCells % 7);
    if (nextDays < 7) {
        for (let i = 1; i <= nextDays; i++) {
            calendarDays.appendChild(createCell(i, { otherMonth: true }));
        }
    }
}

prevBtn.onclick = () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
};

nextBtn.onclick = () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
};

renderCalendar(currentDate);
