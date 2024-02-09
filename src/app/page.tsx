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
import { Direction, Stage } from "./game/stage";

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
    console.log(gameState);
    setGameState(gameState);
    setTimeout(() => {
      setBackground(gameState?.stage.name()!);
    }, 100);
    setScreen(Screen.GAME);
  };

  const updateGameState = (action: Action) => {
    if (action as boolean === true) {
      setDisplayGrid(!displayGrid);
      return;
    }

    gameState?.stage.move(action as Direction);
    setTimeout(() => {
      setBackground(gameState?.stage.name()!);
    }, 100);
  };

  switch (screen) {
    case Screen.MAIN_MENU:
      return (
        <GameWrapper ambience="snowwind" background="/img/background.webp">
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
        <GameWrapper ambience="snowwind" background="/img/background.webp">
          <Menu>
            <NewGame handler={handleNewGame} />
          </Menu>
        </GameWrapper>
      );
    }
    case Screen.LOAD_GAME: {
      return (
        <GameWrapper ambience="snowwind" background="/img/background.webp">
          <Menu>
            <NewGame handler={handleNewGame} />
          </Menu>
        </GameWrapper>
      );
    }
    case Screen.SETTINGS: {
      return (
        <GameWrapper ambience="snowwind" background="/img/background.webp">
          <Menu>
            <NewGame handler={handleNewGame} />
          </Menu>
        </GameWrapper>
      );
    }
    case Screen.GAME: {
      return (
        <GameWrapper ambience="snowwind" background={background} displayGrid={displayGrid}>
          <div className="text-8xl text-red-500 font-extrabold">
            X: {gameState?.stage.x} Y: {gameState?.stage.y} Z:{" "}
            {gameState?.stage.z}
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
