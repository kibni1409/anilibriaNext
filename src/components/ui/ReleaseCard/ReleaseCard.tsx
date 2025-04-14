import {FC} from "react";
import Image from "next/image";
import styles from './ReleaseCard.module.scss';
import dayjs from 'dayjs';
import Link from "next/link";
import {TRelease} from "@/services/types";

interface ReleaseCardProps {
    release: TRelease;
}

const ReleaseCard: FC<ReleaseCardProps> = ({release}) => {
    if(!release) return null;
    return (
        <div className={styles.ReleaseCardWrap}>
            <Image
                src={process.env.NEXT_PUBLIC_BASE_URL + release.poster.src}
                alt={release.name.main}
                width={270}
                height={400}
                priority
            />
            <div className={styles.ReleaseCardInfo}>
                <Link href={`/movie/${release.alias}`} >
                    <h2 className={styles.ReleaseCardHeader}>{release.name.main}</h2>
                </Link>
                <div className={styles.ReleaseCardSmall}>
                    {release.genres
                        ?.map(g => g.name)
                        ?.join(', ')}
                </div>
                <div className={styles.ReleaseCardSmall}>Обновлено: {dayjs(release.updated_at).format('DD.MM.YYYY')}</div>
                <p className={styles.ReleaseCardDescription}>{release.description}</p>
            </div>
        </div>
    );
};

export default ReleaseCard;