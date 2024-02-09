// CreateParty.tsx

import { Title } from "@/app/page";
import React, { useState, FormEvent } from "react";
import { textInputClassName } from ".";
import SubmitButton, { playSfx } from "../SubmitButton";
import ErrorDisplay from "../Utils/errorDisplay";

interface CreatePartyProps {
  onSubmit: (partyData: PartyData) => void;
}

export interface PartyData {
  partyName: string;
  difficulty: string;
  totalPlayers: number;
}

const Easy = () => {
  return (
    <ul className="flex flex-col items-center">
      <li>Start with 40 gold.</li>
      <li>Less enemies per battle.</li>
      <li>Great for beginners</li>
    </ul>
  );
};

const Normal = () => {
  return (
    <ul className="flex flex-col items-center">
      <li>Start with 20 gold.</li>
      <li>Standard amount of enemies per battle.</li>
      <li>You have probablyplayed an RPG before.</li>
    </ul>
  );
};

const Hard = () => {
  return (
    <ul className="flex flex-col items-center">
      <li>Start with 10 gold.</li>
      <li>More enemies per battle.</li>
      <li>Only for experienced strategists.</li>
    </ul>
  );
};

const oneToolTip = "Forever alone =(";
const twoToolTip = "Two is better than one at least!";
const threeToolTip = "Now we are getting somewhere!";
const fourToolTip = "Full party eh? Let's f**king go!";

const CreateParty: React.FC<CreatePartyProps> = ({ onSubmit }) => {
  const [partyName, setPartyName] = useState("");
  const [difficulty, setDifficulty] = useState("normal");
  const [error, setError] = useState<string | null>(null);
  const [totalPlayers, setTotalPlayers] = useState(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const partyData: PartyData = { partyName, difficulty, totalPlayers };
    if (partyName.length <= 3) {
      setError("Name is too short.");
      return;
    }

    if (totalPlayers === 0) {
      setError("Player amount was undefined.");
      return;
    }
    onSubmit(partyData);
  };

  const DifficultyDisplay = () => {
    switch (difficulty) {
      case "easy":
        return <Easy />;
      case "normal":
        return <Normal />;
      case "hard":
        return <Hard />;
    }
  };

  const PlayerAmountDisplay = () => {
    switch (totalPlayers) {
      case 1:
        return <>{oneToolTip}</>;
      case 2:
        return <>{twoToolTip}</>;
      case 3:
        return <>{threeToolTip}</>;
      case 4:
        return <>{fourToolTip}</>;
      default:
        return <></>;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Title text="New Game" />
      <form
        onChange={() => setError(null)}
        onSubmit={handleSubmit}
        className="flex flex-col"
      >
        <div className="flex items-center">
          <label className="text-3xl mr-1">Party Name</label>
          <input
            type="text"
            maxLength={20}
            value={partyName}
            onChange={(e) => setPartyName(e.target.value)}
            className={textInputClassName}
          />
        </div>

        <label className="text-3xl mt-10 mb-3 self-center">Difficulty</label>
        <hr className="mb-3" />
        <div className="flex mb-5 self-center">
          {/* Radio button for Easy difficulty */}
          <input
            type="radio"
            id="easy"
            name="difficulty"
            value="easy"
            className="mr-2 size-8"
            onClick={() => {
              setDifficulty("easy");
              playSfx();
            }}
          />
          <label htmlFor="easy" className="text-lg mr-4">
            Easy
          </label>

          {/* Radio button for normal difficulty */}
          <input
            type="radio"
            id="normal"
            name="difficulty"
            value="normal"
            className="mr-2 h-8 w-8 rounded-none"
            onClick={() => {
              setDifficulty("normal");
              playSfx();
            }}
            defaultChecked
          />

          <label htmlFor="normal" className="text-lg mr-4">
            Normal
          </label>

          {/* Radio button for Hard difficulty */}
          <input
            type="radio"
            id="hard"
            name="difficulty"
            value="hard"
            className="mr-2 size-8"
            onClick={() => {
              setDifficulty("hard");
              playSfx();
            }}
          />
          <label htmlFor="hard" className="text-lg">
            Hard
          </label>
        </div>
        <div className="flex self-center mb-5">
          <DifficultyDisplay />
        </div>
        <label className="text-3xl mt-10 mb-3 self-center">Total players</label>
        <hr className="mb-3" />
        <div className="flex mb-5">
          {/* Radio buttons for Total Players */}
          <input
            type="radio"
            id="player1"
            name="totalPlayers"
            value="1"
            className="mr-2 h-8 w-8 rounded-none"
            onClick={() => {
              setTotalPlayers(1);
              playSfx();
            }}
          />
          <label htmlFor="player1" className="text-lg mr-4">
            1 Player
          </label>

          <input
            type="radio"
            id="player2"
            name="totalPlayers"
            value="2"
            className="mr-2 h-8 w-8 rounded-none"
            onClick={() => {
              setTotalPlayers(2);
              playSfx();
            }}
          />
          <label htmlFor="player2" className="text-lg mr-4">
            2 Players
          </label>

          <input
            type="radio"
            id="player3"
            name="totalPlayers"
            value="3"
            className="mr-2 h-8 w-8 rounded-none"
            onClick={() => {
              setTotalPlayers(3);
              playSfx();
            }}
          />
          <label htmlFor="player3" className="text-lg mr-4">
            3 Players
          </label>

          <input
            type="radio"
            id="player4"
            name="totalPlayers"
            value="4"
            className="mr-2 h-8 w-8 rounded-none"
            onClick={() => {
              setTotalPlayers(4);
              playSfx();
            }}
          />
          <label htmlFor="player4" className="text-lg">
            4 Players
          </label>
        </div>
        <div className="self-center">
          <PlayerAmountDisplay />
        </div>
        {error ? <ErrorDisplay error={error} /> : null}
        <SubmitButton text="Create Party" />
      </form>
    </div>
  );
};

export default CreateParty;
