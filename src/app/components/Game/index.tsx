import { Direction, MusicType } from "@/app/game/stage";
import React, { useEffect } from "react";

export type Action = Direction | MusicType | string;

const Game = ({ handler }: { handler: (input: string) => void }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          handler("UP");
          break;
        case "ArrowDown":
          handler("DOWN");
          break;
        case "ArrowLeft":
          handler("LEFT");
          break;
        case "ArrowRight":
          handler("RIGHT");
          break;
        case "Z":
        case "z":
          handler("ABOVE");
          break;
        case "X":
        case "x":
          handler("BELOW");
          break;
        case " ":
          handler("GRID");
          break;
        case "S":
        case "s":
          handler("STOP_MUSIC");
          break;
        case "A":
        case "a":
          handler("TOGGLE_AMBIENCE");
          break;
        case "M":
        case "m":
          handler("BACKGROUND_MUSIC");
          break;
        case "B":
        case "b":
          handler("BATTLE_MUSIC");
          break;
        default:
          // Handle other key presses if needed
          break;
      }
    };

    // Add event listener when the component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handler]); // Add dependencies if needed

  return <></>;
};

export default Game;
