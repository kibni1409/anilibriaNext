import dayjs from 'dayjs';
import { DATE_FORMATS } from '@/utils/constants/common.constants';

export const formatDate = (date: string, format = DATE_FORMATS.default): string => {
  return dayjs(date).format(format);
};

export const isValidDate = (date: string): boolean => {
  return dayjs(date).isValid();
}; 