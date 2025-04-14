import { BaseResponse } from '@/types/api.types';

export interface ReleaseFilters {
  page?: number;
  limit?: number;
  year?: number;
  season?: string;
  genre?: string;
}

export interface Release {
  id: number;
  name: {
    main: string;
    english: string;
    alternative: string;
  };
  description: string;
  poster: {
    src: string;
    thumbnail: string;
  };
  type: {
    value: string;
    string: string;
  };
  status: {
    code: number;
    string: string;
  };
  year: number;
  season: {
    code: number;
    description: string;
  };
  genres: Array<{
    id: number;
    name: string;
  }>;
  episodes: Episode[];
  updated_at: string;
}

export interface Episode {
  id: string;
  name: string;
  duration: number;
  preview: {
    src: string;
    thumbnail: string;
  };
  hls_720: string;
}

export type ReleasesResponse = BaseResponse<Release[]>;
export type ReleaseResponse = BaseResponse<Release>; 