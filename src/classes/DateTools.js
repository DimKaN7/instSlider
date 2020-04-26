export default class DateTools {
    constructor(dateValue) {
        this.date = new Date(dateValue);
    }

    getDate(short = false) {
        let now = new Date();
        let weeks = Math.floor((now - this.date)/1000/60/60/24/7);
        let days = Math.floor((now - this.date)/1000/60/60/24);
        let hours = Math.floor((now - this.date)/1000/60/60);
        let minutes = Math.floor((now - this.date)/1000/60);
        let seconds = Math.floor((now - this.date)/1000);
        if (!short) {
            if (this.date.getFullYear() == now.getFullYear()) {
                if (seconds < 60) return `${seconds} секунд назад`;
                else {
                    if (minutes < 60) return `${minutes} минут назад`;
                    else {
                        if (hours < 24) {
                            if (hours === 1) return `час назад`;
                            else return `${hours} часов назад`;
                        }
                        else {
                            if (days < 7) {
                                if (days === 1) return 'день назад';
                                else return `${days} дней назад`;
                            }
                            else return this.date.toLocaleString('ru', {
                                month: 'long',
                                day: 'numeric'
                            });
                        }
                    }
                }
            } else {
                return this.date.toLocaleString('ru', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                });
            }
        } else {
            if (seconds < 60) {
                return `${seconds} с.`;
            } else {
                if (minutes < 60) {
                    return `${minutes} м.`;
                }
                else {
                    if (hours < 24) {
                        return `${hours} ч.`;
                    }
                    else {
                        if (days < 7) return `${days} д.`;
                        else return `${weeks} н.`;
                    }
                }
            }
        }
    }
}