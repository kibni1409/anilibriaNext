'use client'

import { FC, useState } from 'react';
import Image from 'next/image';
import { Episode } from '@/types';
import styles from './MovieCard.module.scss';

interface MovieCardProps {
  epis: Episode;
  openMovie: (url: string) => void;
}

const MovieCard: FC<MovieCardProps> = ({ epis, openMovie }) => {
  const [imageError, setImageError] = useState(false);
  
  const imageUrl = epis.preview?.src && !imageError
    ? process.env.NEXT_PUBLIC_BASE_URL + epis.preview.src 
    : '/notFound.webp';

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.MovieCardWrap} onClick={() => openMovie(epis.hls_720)}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={epis.name || 'Preview not found'}
          width={300}
          height={180}
          onError={() => setImageError(true)}
        />
        <div className={styles.overlay}>
          <Image
            src="/play.svg"
            alt="Play"
            width={80}
            height={80}
            className={styles.playIcon}
          />
        </div>
        <div className={styles.episodeInfo}>
          <div className={styles.leftInfo}>
            <span className={styles.episodeName}>{epis.name}</span>
            <span className={styles.duration}>{formatDuration(epis.duration)}</span>
          </div>
          <div className={styles.episodeNumber}>
            Эпизод {epis.ordinal}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;