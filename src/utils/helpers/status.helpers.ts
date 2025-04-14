import { STATUS_CODES } from '@/utils/constants/common.constants';

export const getStatusString = (code: number): string => {
  switch (code) {
    case STATUS_CODES.ongoing:
      return 'Онгоинг';
    case STATUS_CODES.completed:
      return 'Завершен';
    case STATUS_CODES.announced:
      return 'Анонс';
    default:
      return 'Неизвестно';
  }
}; 