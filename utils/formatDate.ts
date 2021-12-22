import { format, localeFormat } from 'light-date';

export const formateDatePreview = (d: string): string => {
  const date = new Date(d);

  const month = localeFormat(date, '{MMM}', 'en-GB');
  const _date = format(date, '{dd}');

  return `${month} ${_date} `;
};

export const formateDateFull = (d: string): string => {
  const date = new Date(d);

  const month = localeFormat(date, '{MMMM}', 'en-GB');
  const _date = format(date, '{dd}');
  const year = format(date, '{yyyy}');

  return `${_date} ${month}, ${year}`;
};

/**
 * Exports data as 2021-07-01 format, to be used with <time /> tag
 */
export const validDate = (d: string): string => {
  const date = new Date(d);

  return format(date, '{yyyy}-{MM}-{dd}');
};
