import ReactPlayer from "react-player";
import {FC} from "react";

const MoviePlayer: FC<{url: string}> = ({url}) => {
    return (
        <ReactPlayer
            url={url}
            controls
            width="400"
            height="200"
            playing={false}
        />
    );
};

export default MoviePlayer;