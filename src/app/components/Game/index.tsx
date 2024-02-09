import { Direction } from "@/app/game/stage";
import React, { useEffect } from "react";

export type Action = Direction | boolean;

const Game = ({ handler }: { handler: (input: Action) => void }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          handler(Direction.UP);
          break;
        case "ArrowDown":
          handler(Direction.DOWN);
          break;
        case "ArrowLeft":
          handler(Direction.LEFT);
          break;
        case "ArrowRight":
          handler(Direction.RIGHT);
          break;
        case "z":
          handler(Direction.ABOVE);
          break;
        case "x":
          handler(Direction.BELOW);
          break;
        case " ":
          handler(true);
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
