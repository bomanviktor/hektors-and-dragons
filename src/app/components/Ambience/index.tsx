import React, { useEffect, useRef } from "react";

const Ambience = ({ track }: { track?: string }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current?.play();
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
      const newAudio = new Audio(`./ambience/amb-${track}.mp3`);
      audioRef.current = newAudio;
      playAudio();
    }
  }, [track]);

  return (
    <audio ref={audioRef} loop className="hidden">
      Your browser does not support the audio element.
    </audio>
  );
};

export default Ambience;
