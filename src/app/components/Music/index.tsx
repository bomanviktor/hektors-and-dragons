import React, { useEffect, useRef } from "react";

const Music = ({ track }: { track?: string }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (track === "stop") {
        pauseAudio();
        audioRef.current = null;
      } else {
        pauseAudio();

        audioRef.current = new Audio(`./music/${track}.mp3`);
        await audioRef.current.play();
      }
    };

    const pauseAudio = () => {
      if (audioRef.current) {
        try {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        } catch (error) {
          console.error("Error pausing audio:", error);
        }
      }
    };

    playAudio();
  }, [track]);

  return <audio ref={audioRef} loop className="hidden"></audio>;
};

export default Music;
