import dayjs from 'dayjs';

// export const month2DateStr = (month: string): string => {
//     return month ? dayjs(month, 'YYYY-MM').format('YYYY-MM-DD') : ''
// }

// export const date2month = (date: Date | string): any => {
//     return date ? dayjs(date).format('YYYY-MM') : ''
// }

export const isValidDate = (text: string) =>
    dayjs(text.trim(), 'DD.MM.YYYY').isValid();

export const reformatDate = (text: string) =>
    dayjs(text.trim(), 'DD.MM.YYYY').format('YYYY-MM-DD');

export const dateToInput = (date: Date | string) =>
    dayjs(date).format('YYYY-MM-DD') as unknown as Date;

export const formatDate = (date: Date | string) =>
    dayjs(date).format('DD.MM.YYYY');

export const formatServerDate = (date: Date | string): string =>
    dayjs(date).format('YYYY-MM-DD');

export const formatDateAsMonth = (date: Date | string): string =>
    dayjs(date).format('MM/YYYY');

export const formatDateTime = (date: Date): string =>
    dayjs(date).format('DD.MM.YYYY HH:mm:ss');

export const formatDateTimeStamp = (date: Date): string =>
    dayjs(date).format('DD-MM-YYYY_HH-mm');

// 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'

export const formatAmount = (value: number) => {
    if (!value) return '0 Kč';
    const parts = value.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join(',') + ' Kč';
};