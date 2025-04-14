import { useState, useEffect } from 'react';
import { Release } from '@/services/release/release.types';
import { ReleaseService } from '@/services/release/release.service';
import { useError } from '@/hooks/common/useError';
import { useLoading } from '@/hooks/common/useLoading';

export const useReleaseService = (id: string) => {
  const [release, setRelease] = useState<Release | null>(null);
  const { setError, clearError } = useError();
  const { setLoading } = useLoading();

  useEffect(() => {
    const fetchRelease = async () => {
      try {
        setLoading(true);
        clearError();
        const response = await ReleaseService.getRelease(id);
        setRelease(response.data);
      } catch (error) {
        setError('Failed to fetch release');
        console.error('Error fetching release:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchRelease();
    }
  }, [id, setError, clearError, setLoading]);

  return { release };
}; 