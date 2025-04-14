export interface BaseResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      total: number;
      count: number;
      per_page: number;
      current_page: number;
      total_pages: number;
      links: {
        previous: string | null;
        next: string | null;
      };
    };
  };
}

export interface ApiError {
  message: string;
  code: number;
  details?: Record<string, unknown>;
}

export interface PaginationMeta {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  links: {
    previous: string | null;
    next: string | null;
  };
}

export interface ApiResponse<T> {
  data: T[];
  meta: {
    pagination: PaginationMeta;
  }
}