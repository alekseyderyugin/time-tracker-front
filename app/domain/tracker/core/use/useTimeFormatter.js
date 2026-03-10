//@ts-check

function formatDefault(seconds) {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60

    const pad = n => String(n).padStart(2, '0')

    return `${pad(h)}:${pad(m)}:${pad(s)}`
}

/**
 *
 * @param {Number} startTimestamp
 * @param {Number} endTimestamp
 * @returns {string}
 */
function formatDailyTimeIntervalLabel(startTimestamp, endTimestamp) {
    const start = new Date(startTimestamp * 1000);
    const end = new Date(endTimestamp * 1000);

    const now = new Date();

    const isToday =
        start.getFullYear() === now.getFullYear() &&
        start.getMonth() === now.getMonth() &&
        start.getDate() === now.getDate();

    const formatTime = (date) =>
        date.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });

    const prefix = isToday
        ? 'Сегодня'
        : start.toLocaleDateString('ru-RU');

    return `${prefix}, ${formatTime(start)} - ${formatTime(end)}`;
}

/**
 * @param {{closedAt: Number, startedAt: Number}[]} intervals
 * @returns {string}
 */
function formatDurationHMS(intervals) {
    let totalSeconds = 0;

    for (const interval of intervals) {
        totalSeconds += Math.max(0, interval.closedAt - interval.startedAt)
    }

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n) => n.toString().padStart(2, '0');

    return `${hours}:${pad(minutes)}:${pad(seconds)}`;
}

export default function useTimeFormatter() {
    return {
        formatDefault, formatDailyTimeIntervalLabel, formatDurationHMS
    }
}