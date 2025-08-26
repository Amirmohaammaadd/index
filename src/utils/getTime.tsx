export const getPersianDateTime = () => {
    const now = new Date();

    const persianDate = new Intl.DateTimeFormat('fa', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(now);

    return `${persianDate}`;
}