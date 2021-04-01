/**
 * Custom class to deal with the shitty ass js dates
 */

const FORMAT_EUROPEAN = 'european';
const FORMAT_AMERICAN = 'american';

/**
 * Converts Date object to specified format
 * @param format
 * @param date
 */
function convertDate(format: string, date: Date): string {
  const pad = (s) => (s < 10 ? '0' + s : s);
  switch (format) {
    default:
    case FORMAT_EUROPEAN:
      return [
        pad(date.getDate()),
        pad(date.getMonth() + 1),
        date.getFullYear(),
      ].join('-');
    case FORMAT_AMERICAN:
      return [
        date.getFullYear(),
        pad(date.getMonth() + 1),
        pad(date.getDate()),
      ].join('-');
  }
}

const DateUtils = {
  toEuropean: (date: Date): string => convertDate(FORMAT_EUROPEAN, date),
  toAmerican: (date: Date): string => convertDate(FORMAT_AMERICAN, date),
};

export default DateUtils;
