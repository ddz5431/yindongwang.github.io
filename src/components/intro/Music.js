import "./music.scss";
import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import oneSummerDay from "../../assets/one_summer_day.mp3"
import madSummer from "../../assets/mad_summer.mp3"

export default function Play() {
    const musicTracks = [
        {
            name: "One summer day",
            src: oneSummerDay
        },
        {
            name: "Mad summer",
            src: madSummer
        },
        {
            name: "Sunny",
            src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3"
        },
        {
            name: "Tenderness",
            src: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3"
        },
        {
            name: "Once Again",
            src: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3"
        },
        {
            name: "Sweet",
            src: "https://www.bensound.com/bensound-music/bensound-sweet.mp3"
        },
        {
            name: "Love",
            src: "https://www.bensound.com/bensound-music/bensound-love.mp3"
        },
        {
            name: "Piano Moment",
            src: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3"
        },
        {
            name: "E.R.F",
            src: "https://www.bensound.com/bensound-music/bensound-erf.mp3"
        },
        {
            name: "Dreams",
            src: "https://www.bensound.com/bensound-music/bensound-dreams.mp3"
        },
        {
            name: "A Day To Remember",
            src:
                "https://www.bensound.com/royalty-free-music/track/a-day-to-remember-wedding-music"
        },
        {
            name: "Adventure",
            src: "https://www.bensound.com/bensound-music/bensound-adventure.mp3"
        },
        {
            name: "Photo Album",
            src: "https://www.bensound.com/bensound-music/bensound-photoalbum.mp3"
        },
        {
            name: "November",
            src: "https://www.bensound.com/bensound-music/bensound-november.mp3"
        }
    ];

    const [trackIndex, setTrackIndex] = useState(1);

    const handleClickPrevious = () => {
        setTrackIndex((currentTrack) =>
            currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
        );
    };

    const handleClickNext = () => {
        setTrackIndex((currentTrack) =>
            currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
        );
    };

    return (
        <div className="music_player">
            <AudioPlayer
                autoPlay
                src={musicTracks[trackIndex].src}
                showSkipControls={true}
                showJumpControls={false}
                header={`Now playing: ${musicTracks[trackIndex].name}`}
                // footer="All music from: www.bensound.com"
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
                onEnded={handleClickNext}
                // other props here
            />
        </div>
    );
}
