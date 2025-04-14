import axios from 'axios';
import { ApiResponse } from '@/types';
import {TDataRelease, TRelease} from "@/services/types";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
    timeout: 10000
});

export const ReleaseService = {
    async getReleases(page: number = 1, limit: number = 15): Promise<ApiResponse<TRelease>> {
        const { data } = await api.get<ApiResponse<TRelease>>('/anime/catalog/releases', {
            params: {
                page,
                limit,
                'f[years][to_year]': 2025,
                'f[years][from_year]': 1990
            }
        });
        return data;
    },

    async getDataRelease(name: string): Promise<TDataRelease> {
        const { data } = await api.get<TDataRelease>(`/anime/releases/${name}`);
        return data;
    },

    async getSearch(text: string): Promise<TRelease[]> {
        const { data } = await api.get<TRelease[]>(`app/search/releases/?query=${text}`);
        return data;
    }
};
