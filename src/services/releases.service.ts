import { ApiResponse } from '@/types';
import { apiClient } from '@/services/api/client';
import {TDataRelease, TRelease} from "@/services/types";

export const ReleaseService = {
    async getReleases(page: number = 1, limit: number = 15): Promise<ApiResponse<TRelease>> {
        return apiClient.get<ApiResponse<TRelease>>('/anime/catalog/releases', {
            params: {
                page,
                limit,
                'f[years][to_year]': 2025,
                'f[years][from_year]': 1990
            }
        });
    },

    async getDataRelease(name: string): Promise<TDataRelease> {
        return apiClient.get<TDataRelease>(`/anime/releases/${name}`);
    },

    async getSearch(text: string): Promise<TRelease[]> {
        return apiClient.get<TRelease[]>(`app/search/releases/?query=${text}`);
    }
};
