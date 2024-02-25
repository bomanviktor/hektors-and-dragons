import { FormEvent, useState } from "react";
import { PartyData } from "./createParty";
import { Title } from "@/app/page";
import React from "react";
import { textInputClassName } from ".";
import { Ability, Race, Stats, Traits, dwarf, elf, man, wizard } from "./races";
import SubmitButton, { playSfx } from "../SubmitButton";
import ErrorDisplay from "../Utils/errorDisplay";
import { CYCLE_COLOR, CYCLE_HOVER_COLOR } from "@/app/constants";
import Image from "next/image";

interface CreateCharacterProps {
  partyData: PartyData;
  onSubmit: (characterData: Character[]) => void;
}

export interface Character {
  name: string;
  level: number;
  race: Race;
  class: string;
}

const races = [dwarf, elf, man, wizard];

const CharacterCreation: React.FC<CreateCharacterProps> = ({
  partyData,
  onSubmit,
}) => {
  const [characterName, setCharacterName] = useState("");
  const [selectedRace, setSelectedRace] = useState(dwarf); // Initial selection
  const [raceIndex, setRaceIndex] = useState(0);
  const [playerClass, setClass] = useState(dwarf.classes[0]);
  const [classIndex, setClassIndex] = useState(0);
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [classAbilities, setClassAbilities] = useState<Ability[]>(
    dwarf.classes[0].abilities,
  );
  const [error, setError] = useState<string | null>(null);

  const resetAll = () => {
    setCharacterName("");
    setSelectedRace(dwarf);
    setRaceIndex(0);
    setClass(dwarf.classes[0]);
    setClassAbilities(dwarf.classes[0].abilities);
  };

  const cycleRace = (direction: number) => {
    playSfx();
    const nextIndex = (raceIndex + direction + races.length) % races.length;
    setRaceIndex(nextIndex);

    const selectedRace = races[nextIndex];
    setSelectedRace(selectedRace);

    const selectedClass = selectedRace.classes[0];
    setClass(selectedClass);
    setClassIndex(0);

    const abilities = selectedClass.abilities;
    setClassAbilities(abilities);
  };

  const cycleClass = (direction: number) => {
    const raceClasses = selectedRace.classes;
    const newIndex =
      (classIndex + direction + raceClasses.length) % raceClasses.length;
    setClassIndex(newIndex);
    const selectedClass = raceClasses[newIndex];
    setClass(selectedClass);
    setClassAbilities(selectedClass.abilities);
    playSfx();
  };

  const createCharacter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (characterName.length === 0) {
      setError("Name is too short");
      return;
    }
    const newCharacterList = characterList;
    newCharacterList.push({
      name: characterName,
      level: 1,
      race: selectedRace,
      class: playerClass.id,
    });
    setCharacterList(newCharacterList);
    resetAll();
    if (characterList.length === partyData.totalPlayers) {
      onSubmit(characterList);
    }
  };

  const CycleButton = ({
    handler,
    type,
  }: {
    handler: (change: number) => void;
    type: string;
  }) => {
    return (
      <div
        className={`flex w-1/3 mb-2 mx-5 items-center border-solid justify-between`}
      >
        <button
          type="button"
          onClick={() => handler(-1)}
          className={`${CYCLE_COLOR} ${CYCLE_HOVER_COLOR} text-5xl font-extrabold transition cursor-default`}
        >
          {"↢"}
        </button>
        <label htmlFor={selectedRace.id} className="text-3xl self-center">
          {type === "race"
            ? races.find((race) => race.id === selectedRace.id)?.label
            : toTitle(selectedRace.classes[classIndex].id)}
        </label>
        <button
          type="button"
          onClick={() => handler(1)}
          className={`${CYCLE_COLOR} ${CYCLE_HOVER_COLOR} text-5xl font-extrabold transition cursor-default`}
        >
          {"↣"}
        </button>
      </div>
    );
  };

  const DisplayDescription = () => {
    if (!playerClass.description) {
      return null;
    }

    return (
      <div className="text-sm flex flex-col mt-2 mr-10">
        <label className="text-xl">Description</label>
        <hr />
        <div className=" bg-indigo-700 bg-opacity-40 p-3">
          {playerClass.description.replaceAll("XX", characterName)}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <Title text="Create Character" />
      <form
        onChange={() => setError(null)}
        onSubmit={createCharacter}
        className="flex flex-col w-full"
      >
        <div
          id="selection-row"
          className="flex items-center justify-between my-2"
        >
          <div id="name-select" className="flex flex-row w-1/3">
            <label className="text-3xl self-center mr-1">{`Name:`}</label>
            <input
              type="text"
              maxLength={15}
              defaultValue={`Player ${characterList.length + 1}`}
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
              className={
                "p-1 text-black text-2xl w-2/3 font-medium focus:outline-none focus:bg-white focus:border-gray-300 rounded-lg text-start"
              }
            />
          </div>
          <CycleButton handler={cycleRace} type={"race"} />
          <CycleButton handler={cycleClass} type={"class"} />
        </div>

        <hr />
        <div className="flex mt-3">
          <div
            id="first-col"
            className="flex flex-col h-full w-1/2 bg-indigo-600 bg-opacity-60 p-2 mr-2 rounded-lg"
          >
            <div id="first-row" className="flex flex-row items-center">
              <div className="w-1/2">
                <Image
                  className="mr-2 p-0.5 bg-stone-700 rounded"
                  src={playerClass.image ?? "/img/men/paladin/solar-flare.webp"}
                  alt={playerClass.id + " profile picture"}
                  width={240}
                  height={240}
                />
              </div>

              <div className="flex flex-col p-5 w-1/2">
                <DisplayStats stats={selectedRace.stats} />
                <DisplayTraits traits={playerClass.traits} />
              </div>
            </div>

            <div id="second-row" className="flex items-center mt-5">
              <div id="passive flex-1">
                <label className="text-xl ml-1">Passive</label>
                <hr />
                <DisplayAbilities
                  abilities={selectedRace.passive}
                  withImage={false}
                />
              </div>
            </div>
            <div id="class-description">
              <DisplayDescription />
            </div>
          </div>

          <div id="second-column" className="flex flex-column h-full w-1/2">
            <DisplayAbilities abilities={classAbilities} />
          </div>
        </div>
        <SubmitButton text="Create Character" />
        {error ? <ErrorDisplay error={error} /> : null}
      </form>
    </div>
  );
};

export default CharacterCreation;

const DisplayStats = ({ stats }: { stats: Stats }) => {
  const specialStat = stats.defense
    ? stats.defense
    : stats.focus
      ? stats.focus
      : stats.magic
        ? stats.magic
        : stats.strength;
  const special = stats.defense
    ? "Defense"
    : stats.focus
      ? "Focus"
      : stats.magic
        ? "Magic"
        : "Strength";
  return (
    <div id="stats" className="text-l">
      <p>
        <strong>HP:</strong> {stats.HP}
      </p>
      <p>
        <strong>Damage:</strong> {stats.damage}
      </p>
      <p>
        <strong>{special}:</strong> {specialStat}
      </p>
      <p>
        <strong>Range:</strong> {stats.range}
      </p>
      <p>
        <strong>Actions:</strong> {stats.actions}
      </p>
    </div>
  );
};

const DisplayTraits = ({ traits }: { traits: Traits }) => {
  return (
    <div className="flex-1 mt-5">
      <ul>
        <li className="text-sm">
          <strong>Primary: </strong>
          {traits.primary}
        </li>
        <li className="text-sm">
          <strong>Secondary: </strong>
          {traits.secondary}
        </li>
      </ul>
    </div>
  );
};

interface DisplayAbilitiesParams {
  abilities: Ability[];
  withImage?: boolean;
}

const DisplayAbilities = ({
  abilities,
  withImage = true,
}: DisplayAbilitiesParams) => {
  // For dark elf
  if (abilities.length > 4) {
    return (
      <div className="flex flex-col items-normal">
        {abilities.map((ability, index) => (
          <div
            key={index}
            className="flex items-center flex-1 bg-indigo-700 bg-opacity-40 p-1 pl-3 rounded mb-1"
          >
            {withImage ? (
              <Image
                src={ability.image ?? "/img/men/paladin/solar-flare.webp"}
                alt="Ability image"
                width={46}
                height={46}
                className="mr-2 p-0.5 bg-stone-700 rounded"
              />
            ) : null}
            <div key={index} className="flex flex-col text-sm flex-1">
              <strong
                className={`${index === 8 ? "text-yellow-400" : index % 2 === 1 ? "text-black" : null}`}
              >
                {ability.name}
              </strong>
              {ability.description}
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (abilities.length === 2) {
    return (
      <div className="flex flex-col">
        {abilities.map((ability, index) => (
          <div key={index} className="flex items-center">
            <div className="flex text-sm">
              <strong>{ability.name}:</strong>
              <p className="ml-1">{ability.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-col items-normal">
      {abilities.map((ability, index) => (
        <div
          key={index}
          className="flex items-center flex-1 bg-indigo-700 bg-opacity-40 p-3 rounded mb-2"
        >
          {withImage ? (
            <Image
              src={ability.image ?? "/img/men/paladin/solar-flare.webp"}
              alt="Ability image"
              width={96}
              height={96}
              className="mr-2 p-0.5 bg-stone-700 rounded"
            />
          ) : null}
          <div className="flex flex-col text-l flex-1">
            <strong className={`${index === 3 ? "text-yellow-400" : null}`}>
              {ability.name}
            </strong>
            {ability.description}
          </div>
        </div>
      ))}
    </div>
  );
};

const toTitle = (input: string) => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};
