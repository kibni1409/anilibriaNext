export type TRelease = {
    id: number,
    type: {
        value: string,
        description: string
    },
    year: number,
    name: {
        main: string,
        english: string,
        alternative: string
    },
    alias: string,
    season: {
        value: string,
        description: string
    },
    poster: {
        src: string,
        thumbnail: string,
        optimized: {
            src: string,
            thumbnail: string
        }
    },
    fresh_at: string,
    created_at: string,
    updated_at: string,
    is_ongoing: boolean,
    age_rating: {
        value: string,
        label: string,
        is_adult: boolean,
        description: string
    },
    publish_day: {
        value: string,
        description: string
    },
    description: string,
    notification: string,
    episodes_total: number,
    external_player: string,
    is_in_production: boolean,
    is_blocked_by_geo: boolean,
    is_blocked_by_copyrights: boolean,
    added_in_users_favorites: number,
    average_duration_of_episode: number,
    genres: {
        id: number,
        name: string,
        total_releases: number,
        image: {
            preview: string,
            thumbnail: string,
            optmized: {
                preview: string,
                thumbnail: string
            }
        }
    }[],
    latest_episode: {
        id: string,
        name: string,
        ordinal: number,
        opening: {
            start: number,
            stop: number
        },
        ending: {
            start: number,
            stop: number
        },
        preview: {
            src: string,
            thumbnail: string,
            optmized: {
                src: string,
                thumbnail: string
            }
        },
        hls_480: string,
        hls_720: string,
        hls_1080: string,
        duration: number,
        rutube_id: string,
        youtube_id: string,
        updated_at: string,
        sort_order: number,
        name_english: string
    }
}

export type TDataRelease = {
    id: number,
    type: {
        value: string,
        description: string
    },
    year: number,
    name: {
        main: string,
        english: string,
        alternative: string
    },
    alias: string,
    season: {
        value: string,
        description: string
    },
    poster: {
        src: string,
        thumbnail: string,
        optimized: {
            src: string,
            thumbnail: string
        }
    },
    fresh_at: string,
    created_at: string,
    updated_at: string,
    is_ongoing: boolean,
    age_rating: {
        value: string,
        label: string,
        is_adult: boolean,
        description: string
    },
    publish_day: {
        value: number,
        description: string
    },
    description: string,
    notification: string,
    episodes_total: number,
    external_player: number,
    is_in_production: boolean,
    is_blocked_by_geo: boolean,
    is_blocked_by_copyrights: boolean,
    added_in_users_favorites: number,
    average_duration_of_episode: string,
    genres: {
        id: number,
        name: string,
        image: {
            preview: string,
            thumbnail: string,
            optimized: {
                preview: string,
                thumbnail: string
            }
        },
        total_releases: number
    }[],
    members: {
        id: string,
        role: {
            value: string,
            description: string
        },
        nickname: string,
        user: string
    }[],
    sponsor: string,
    episodes: TMovieData[],
    torrents: {
        id: number,
        hash: string,
        size: number,
        type: {
            value: string,
            description: string
        },
        label: string,
        codec: {
            value: string,
            description: string
        },
        color: {
            value: string,
            description: string
        },
        magnet: string,
        seeders: number,
        quality: {
            value: number,
            description: number
        },
        bitrate: string,
        filename: string,
        leechers: number,
        sort_order: number,
        created_at: string,
        updated_at: string,
        description: string,
        completed_times: string,
    }[]
}

export type TMovieData = {
    id: string,
    name: string,
    ordinal: number,
    opening: {
        stop: number,
        start: number
    },
    ending: {
        stop: number,
        start: number
    },
    preview: {
        src: string,
        thumbnail: string,
        optimized: {
            src: string,
            thumbnail: string
        }
    },
    hls_480: string,
    hls_720: string,
    hls_1080: string,
    duration: number,
    rutube_id: string,
    youtube_id: string,
    updated_at: number,
    sort_order: number,
    name_english: string
}

export interface PaginationLinks {
    previous: string | null;
    next: string | null;
}

export interface PaginationMeta {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    links: PaginationLinks;
}

export interface ApiResponse<T> {
    data: T[];
    meta: {
        pagination: PaginationMeta;
    }
}