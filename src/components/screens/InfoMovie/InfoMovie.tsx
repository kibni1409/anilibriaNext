"use client"
import Layout from "@/components/layout/Layout";
import {FC, useState} from "react";
import Image from "next/image";
import styles from './InfoMovie.module.scss';
import dayjs from "dayjs";
import MovieCard from "../../ui/MovieCard/MovieCard";
import MoviePlayer from "@/components/ui/MoviePlayer/MoviePlayer";
import {useReleaseService} from "@/hooks/useReleaseService";
import cn from 'classnames';

const InfoMovie: FC<{ name: string }> = ({name}) => {
    const {movie} = useReleaseService(name)
    const [playInfo, setPlayInfo] = useState<string>('');

    if (!movie) return;

    return (
        <Layout>
            <div className={styles.InfoMovie}>
                <div className={styles.InfoMovieWrap}>
                    <Image
                        src={process.env.NEXT_PUBLIC_BASE_URL + movie.poster.src}
                        alt={movie.poster.src}
                        width={300}
                        height={500}
                        priority
                    />
                    <div className={styles.InfoMovieInfo}>
                        <div className={styles.titleWrapper}>
                            <h1 className={styles.InfoMovieHeader}>{movie.name.main}</h1>
                            <span className={styles.englishTitle}>{movie.name.english}</span>
                        </div>

                        <div className={styles.ratingBlock}>
                            <div className={cn(styles.ageBadge, {
                                [styles.adult]: movie.age_rating.label.includes('18'),
                                [styles.child]: !movie.age_rating.label.includes('18')
                            })}>
                                {movie.age_rating.label}
                            </div>
                            <div className={styles.publishDay}>
                                {movie.publish_day.description}
                            </div>
                        </div>

                        <div className={styles.infoBlock}>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>Обновлено:</span>
                                <span className={styles.infoValue}>{dayjs(movie.updated_at).format('DD.MM.YYYY')}</span>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>Тип:</span>
                                <span className={styles.infoValue}>{movie.type.value}</span>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>Сезон:</span>
                                <span className={styles.infoValue}>{movie.season.description}</span>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>Жанры:</span>
                                <span className={styles.infoValue}>{movie.genres?.map(g => g.name)?.join(', ')}</span>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>Год выхода:</span>
                                <span className={styles.infoValue}>{movie.year}</span>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>Всего эпизодов:</span>
                                <span className={styles.infoValue}>{movie.episodes.length} эпизодов</span>
                            </div>
                        </div>
                    </div>
                </div>
                <p className={styles.InfoMovieDescription}>
                    {movie.description}
                </p>
                <MoviePlayer url={playInfo}/>
                <div className={styles.episodesGrid}>
                    {movie.episodes.map(epis =>
                        <MovieCard
                            epis={epis}
                            key={epis.id}
                            openMovie={setPlayInfo}
                        />
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default InfoMovie;