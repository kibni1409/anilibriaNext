import { useErrorContext } from '@/context/ErrorContext';

export const useError = () => {
  const { error, setError, clearError } = useErrorContext();
  return { error, setError, clearError };
}; 