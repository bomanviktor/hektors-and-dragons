// components/MainMenu.js
import { CYCLE_HOVER_COLOR } from "@/app/constants";
import { Title } from "@/app/components/Title";
import React, { useState } from "react";

interface MainMenuParams {
  handleQuickPlay: () => void;
  handleNewGame: () => void;
  handleLoadGame: () => void;
  handleSettings: () => void;
}
const MainMenu = ({
  handleQuickPlay,
  handleNewGame,
  handleLoadGame,
  handleSettings,
}: MainMenuParams) => {
  return (
    <div className="flex flex-col items-center">
      <Title text="Main Menu" size="4xl" />
      <ul className="flex flex-col border-0 p-20 justify-between">
        <MenuItem text="Quick Play" handler={handleQuickPlay} />
        <MenuItem text="New Game" handler={handleNewGame} />
        <MenuItem text="Load Game" handler={handleLoadGame} />
        <MenuItem text="Settings" handler={handleSettings} />
      </ul>
    </div>
  );
};

export default MainMenu;

interface MenuItemParams {
  text: string;
  handler: () => void;
}

export const MenuItem: React.FC<MenuItemParams> = ({ text, handler }) => {
  const [textColor, setTextColor] = useState("white");
  const handleMouseOver = () => {
    setTextColor("rgb(37 99 235)");
  };

  const handleMouseOut = () => {
    setTextColor("white");
  };

  return (
    <li
      className={` ${CYCLE_HOVER_COLOR} justify-center cursor-default text-4xl my-10 transition`}
      onClick={handler}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {text}
    </li>
  );
};
