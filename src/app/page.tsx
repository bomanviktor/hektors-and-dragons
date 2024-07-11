"use client";
import { useState } from "react";
import NewGame from "./components/NewGame";
import MainMenu from "./components/MainMenu";
import GameWrapper from "./components/GameWrapper";
import { playSfx } from "./components/SubmitButton";
import { Character } from "./components/NewGame/createCharacter";
import { MENU_BACKGROUND, MENU_BG_COLOR } from "./constants";
import Game, { Action } from "./components/Game";
import { GameState } from "./game/gameState";
import { PartyData } from "./components/NewGame/createParty";
import { Direction, MusicType, Stage } from "./game/stage";
import LoreScreen from "./components/LoreScreen";

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
  QUICK_PLAY,
  NEW_GAME,
  LOAD_GAME,
  SETTINGS,
  GAME,
  LORE_SCREEN,
}

export default function Main() {
  const [screen, setScreen] = useState(Screen.MAIN_MENU);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [background, setBackground] = useState("");
  const [displayGrid, setDisplayGrid] = useState(false);
  const [displayCoords, setDisplayCoords] = useState(false);
  const [ambience, setAmbience] = useState<string | undefined>("forest-day");
  const [currentMusic, setMusic] = useState<string | undefined>();

  const quickPlay = () => {
    playSfx();
    const gameState = new GameState("Quick Play Party", "medium", []);
    if (!gameState) {
      return;
    }
    setGameState(gameState);
    setAmbience(gameState.stage.ambience);
    setMusic(gameState.stage.backgroundMusic);
    setBackground(gameState.stage.name(gameState.night));
    setScreen(Screen.GAME);
  };

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
    setScreen(Screen.LORE_SCREEN);
  };

  const handleLoreScreen = () => {
    if (!gameState) {
      return;
    }
    setTimeout(() => {
      setMusic("stop");
      setAmbience(gameState.stage.ambience);
      setBackground(gameState.stage.name(gameState.night));
    }, 100);
    setScreen(Screen.GAME);
  };

  const updateGameState = (action: string) => {
    if (!gameState) {
      return;
    }
    if (action === "GRID") {
      setDisplayGrid(!displayGrid);
      return;
    }

    if (action === "TOGGLE_COORDS") {
      setDisplayCoords(!displayCoords);
      return;
    }

    if (action == "TOGGLE_AMBIENCE") {
      if (ambience !== "stop") {
        setAmbience("stop");
      } else {
        setAmbience(gameState.stage.ambience);
      }
      return;
    }

    const music = gameState.stage.chooseMusic(action);
    if (music) {
      if (music === currentMusic) {
        setMusic("stop");
      } else {
        setMusic(music);
      }
      return;
    }

    if (isDirection(action)) {
      gameState.stage.move(action as Direction, gameState.night);
    }
    if (action === "TOGGLE_NIGHT") {
      gameState.night = !gameState.night;
      gameState.stage.update(gameState.night);
    }
    setTimeout(() => {
      const ambience = gameState.stage.getAmbience();
      setAmbience(ambience);
      setBackground(gameState.stage.name(gameState.night));
    }, 100);
  };

  switch (screen) {
    case Screen.MAIN_MENU:
      return (
        <GameWrapper
          chapter="elysia"
          ambience={ambience}
          background={MENU_BACKGROUND}
        >
          <Menu>
            <div className="mb-20"></div>
            <MainMenu
              handleQuickPlay={quickPlay}
              handleNewGame={newGame}
              handleLoadGame={loadGame}
              handleSettings={settings}
            />
          </Menu>
        </GameWrapper>
      );
    case Screen.QUICK_PLAY: {
    }
    case Screen.NEW_GAME: {
      return (
        <GameWrapper
          chapter="elysia"
          ambience={ambience}
          background={MENU_BACKGROUND}
        >
          <Menu>
            <NewGame handler={handleNewGame} />
          </Menu>
        </GameWrapper>
      );
    }
    case Screen.LOAD_GAME: {
      return (
        <GameWrapper ambience={ambience} background={MENU_BACKGROUND}>
          <Menu>
            <NewGame handler={handleNewGame} />
          </Menu>
        </GameWrapper>
      );
    }
    case Screen.SETTINGS: {
      return (
        <GameWrapper ambience={ambience} background={MENU_BACKGROUND}>
          <Menu>
            <NewGame handler={handleNewGame} />
          </Menu>
        </GameWrapper>
      );
    }
    case Screen.LORE_SCREEN: {
      return (
        <GameWrapper
          ambience={"stop"}
          chapter={gameState?.chapter}
          // music={"music-start"}
          background={MENU_BACKGROUND}
        >
          <Menu>
            <LoreScreen handler={handleLoreScreen} />
          </Menu>
        </GameWrapper>
      );
    }
    case Screen.GAME: {
      return (
        <GameWrapper
          chapter={gameState?.chapter}
          ambience={ambience}
          music={currentMusic}
          background={background}
          isNight={gameState?.night}
          displayGrid={displayGrid}
        >
          {displayCoords ? (
            <div className="text-l text-grey top-0 left-0">
              X: {gameState?.stage.location.x} Y: {gameState?.stage.location.y}{" "}
              Z: {gameState?.stage.location.z}
            </div>
          ) : null}

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
