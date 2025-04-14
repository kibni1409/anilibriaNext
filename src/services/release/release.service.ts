import { apiClient } from '@/services/api/client';
import { API_ENDPOINTS } from '@/services/api/endpoints';
import { ReleaseFilters, ReleasesResponse, ReleaseResponse } from './release.types';

export class ReleaseService {
  static async getReleases(filters: ReleaseFilters): Promise<ReleasesResponse> {
    return apiClient.get(API_ENDPOINTS.releases, { params: filters });
  }

  static async getRelease(id: string): Promise<ReleaseResponse> {
    return apiClient.get(`${API_ENDPOINTS.releases}/${id}`);
  }
} 