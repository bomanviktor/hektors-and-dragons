import React, { useEffect, useRef, useState } from "react";

const Music = ({ track }: { track?: string }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setTrack] = useState<string | undefined>();

  useEffect(() => {
    const playAudio = async () => {
      if (track === "stop") {
        pauseAudio();
        audioRef.current = null;
      }
      try {
        await audioRef.current?.play();
        setTrack(currentTrack);
      } catch (error) {
        console.error("Error playing audio:", error);
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

    // Pause and play audio when track changes
    pauseAudio();

    if (track) {
      // Create a new audio element
      const newAudio = new Audio(`./music/${track}.mp3`);
      audioRef.current = newAudio;
      playAudio();
    }
  }, [track]);

  return <audio ref={audioRef} loop className="hidden"></audio>;
};

export default Music;
