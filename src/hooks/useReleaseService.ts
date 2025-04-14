import { useState, useEffect } from 'react';
import { ReleaseService } from '@/services/releases.service';
import {TDataRelease} from "@/services/types";

export const useReleaseService = (name: string) => {
  const [movie, setMovie] = useState<TDataRelease | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await ReleaseService.getDataRelease(name);
        setMovie(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch movie');
      }
    };

    if (name) {
      fetchMovie();
    }
  }, [name]);

  return { movie, error };
};