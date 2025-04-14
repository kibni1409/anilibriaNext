"use client"

import {useState} from "react";
import {ReleaseService} from "@/services/releases.service";
import {TRelease} from "@/services/types";

export const useSearch = () => {
    const [result, setResult] = useState<TRelease[]>([])
    const [error, setError] = useState<string | null>(null)

    const searchHandler = async (text: string) => {
        try {
            const data = await ReleaseService.getSearch(text);
            setResult(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Search failed');
        }
    }

    return { result, error, searchHandler }
}