"use client";
import { useState } from "react";
import NewGame from "./components/NewGame";
import MainMenu from "./components/MainMenu";
import GameWrapper from "./components/GameWrapper";
import { playSfx } from "./components/SubmitButton";
import { Character } from "./components/NewGame/createCharacter";
import { MENU_BG_COLOR } from "./constants";
import Game, { Action } from "./components/Game";
import { GameState } from "./game/gameState";
import { PartyData } from "./components/NewGame/createParty";
import { Direction, MusicType, Stage } from "./game/stage";

// Type guards
const isDirection = (action: Action): action is Direction => {
  return (
    action === Direction.UP ||
    action === Direction.RIGHT ||
    action === Direction.DOWN ||
    action === Direction.LEFT ||
    action === Direction.ABOVE ||
    action === Direction.BELOW
  );
};

const isMusicType = (action: Action): action is MusicType => {
  return action === MusicType.BATTLE || action === MusicType.BACKGROUND;
};

enum Screen {
  MAIN_MENU,
  NEW_GAME,
  LOAD_GAME,
  SETTINGS,
  GAME,
}

export default function Main() {
  const [screen, setScreen] = useState(Screen.MAIN_MENU);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [background, setBackground] = useState("");
  const [displayGrid, setDisplayGrid] = useState(false);
  const [ambience, setAmbience] = useState<string | undefined>(
    "wind-snow-peak",
  );
  const [currentMusic, setMusic] = useState<string | undefined>();
  const newGame = () => {
    playSfx();
    setScreen(Screen.NEW_GAME);
  };

  const loadGame = () => {
    playSfx();
    setScreen(Screen.LOAD_GAME);
  };

  const settings = () => {
    playSfx();
    setScreen(Screen.SETTINGS);
  };

  const handleNewGame = (characterData: Character[], partyData: PartyData) => {
    playSfx();
    const gameState = new GameState(
      partyData.partyName,
      partyData.difficulty,
      characterData,
    );
    if (!gameState) {
      return;
    }
    setGameState(gameState);
    setTimeout(() => {
      setAmbience(gameState.stage.ambience);
      setBackground(gameState.stage.name());
    }, 100);
    setScreen(Screen.GAME);
  };

  const updateGameState = (action: string) => {
    if (action === "GRID") {
      setDisplayGrid(!displayGrid);
      return;
    }
    if (action == "TOGGLE_AMBIENCE") {
      if (ambience !== "stop") {
        setAmbience("stop");
        return;
      }
    }
    const music = gameState?.stage.chooseMusic(action);
    if (music) {
      if (music === currentMusic) {
        setMusic("stop");
      } else {
        setMusic(music);
      }
    }

    if (isDirection(action)) {
      gameState?.stage.move(action as Direction);
    }

    setTimeout(() => {
      const ambience = gameState?.stage.getAmbience();
      setAmbience(ambience);
      setBackground(gameState?.stage.name()!);
    }, 200);
  };

  switch (screen) {
    case Screen.MAIN_MENU:
      return (
        <GameWrapper ambience={ambience} background="/img/background.webp">
          <Menu>
            <MainMenu
              handleNewGame={newGame}
              handleLoadGame={loadGame}
              handleSettings={settings}
            />
          </Menu>
        </GameWrapper>
      );
    case Screen.NEW_GAME: {
      return (
        <GameWrapper ambience={ambience} background="/img/background.webp">
          <Menu>
            <NewGame handler={handleNewGame} />
          </Menu>
        </GameWrapper>
      );
    }
    case Screen.LOAD_GAME: {
      return (
        <GameWrapper ambience={ambience} background="/img/background.webp">
          <Menu>
            <NewGame handler={handleNewGame} />
          </Menu>
        </GameWrapper>
      );
    }
    case Screen.SETTINGS: {
      return (
        <GameWrapper ambience={ambience} background="/img/background.webp">
          <Menu>
            <NewGame handler={handleNewGame} />
          </Menu>
        </GameWrapper>
      );
    }
    case Screen.GAME: {
      return (
        <GameWrapper
          ambience={ambience}
          music={currentMusic}
          background={background}
          displayGrid={displayGrid}
        >
          <div className="text-8xl text-red-500 font-extrabold">
            X: {gameState?.stage.location.x} Y: {gameState?.stage.location.y} Z:{" "}
            {gameState?.stage.location.z}
          </div>
          <Game handler={updateGameState} />
        </GameWrapper>
      );
    }
  }
}

const Menu = ({ children }: { children: any }) => {
  return (
    <div
      className={`${MENU_BG_COLOR} bg-opacity-85 py-5 rounded-xl w-full h-full p-10`}
    >
      {children}
    </div>
  );
};

interface TitleParams {
  text: string;
  size?: string;
}
export const Title = ({ text, size = "6xl" }: TitleParams) => {
  return (
    <h1 className={`text-${size} cursor-default my-5 self-center`}>{text}</h1>
  );
};
