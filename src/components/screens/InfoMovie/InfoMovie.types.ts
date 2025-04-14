import { Release } from '@/services/release/release.types';

export interface InfoMovieProps {
  name: string;
}

export interface MovieState {
  playInfo: string;
  currentEpisode: number | null;
}

export interface MovieContextValue {
  release: Release | null;
  isLoading: boolean;
  error: string | null;
} 