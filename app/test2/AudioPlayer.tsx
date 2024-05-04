import React, { useRef, useEffect, useState } from 'react';

const AudioPlayer = ({ audioSrc, timestamps, setActiveIndex }) => {
    const audioRef = useRef(null);
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);

    const handleTimestampClick = (timestamp, index) => {
        if (audioRef.current && audioRef.current.readyState > 0) {
            audioRef.current.currentTime = timestamp;
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        const handleTimeUpdate = () => {
            const currentTime = audioRef?.current?.currentTime;
            const matchingTimestamp = timestamps.find(timestamp => currentTime >= timestamp && currentTime < timestamp + 1); // Adjust the tolerance as needed
            if (matchingTimestamp !== undefined) {
                const index = timestamps.indexOf(matchingTimestamp);
                setActiveIndex(index);
                setActiveButtonIndex(index);
            }
        };

        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
        }
        
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, [timestamps, setActiveIndex]);

    return (
        <div className="audio-player mt-4">
            <audio className='w-full mt-4' ref={audioRef} src={audioSrc} controls />
            <div className="timestamps flex w-full justify-between">
                {timestamps.map((timestamp, index) => (
                    <button
                        key={index}
                        className={`py-1 px-2 bg-gray mt-4 text-sm ${index === activeButtonIndex ? 'bg-blue-500 text-white' : ''}`}
                        onClick={() => handleTimestampClick(timestamp, index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AudioPlayer;
