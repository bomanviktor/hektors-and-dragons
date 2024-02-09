import React, { useEffect, useRef } from "react";

const Music = ({ track }: { track?: string }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current?.play();
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    };

    playAudio();
  }, []);

  return (
    <audio ref={audioRef} loop className="hidden">
      <source src={`./music/${track}.mp3`} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default Music;
