import {TMovieData} from "@/services/types";

export interface MovieCardProps {
    epis: TMovieData;
    openMovie: (url: string) => void;
}
