import React, { useState } from "react";
import CreateParty, { PartyData } from "./createParty";
import CreateCharacter, { Character } from "./createCharacter";

export const textInputClassName =
  "p-1 text-black text-2xl w-2/3 font-medium focus:outline-none focus:bg-white focus:border-gray-300 rounded-lg text-start";

const NewGame = ({
  handler,
}: {
  handler: (characterData: Character[], partyData: PartyData) => void;
}) => {
  const [partyData, setPartyData] = useState<PartyData | undefined>();
  const handlePartySubmit = (partyData: PartyData) => {
    setPartyData(partyData);
  };

  const handleCharacterCreation = (characterData: Character[]) => {
    handler(characterData, partyData!);
    return;
  };

  return (
    <div>
      {/* Other components or UI elements */}
      {partyData === undefined ? (
        <CreateParty onSubmit={handlePartySubmit} />
      ) : (
        <CreateCharacter
          partyData={partyData}
          onSubmit={handleCharacterCreation}
        />
      )}
    </div>
  );
};

export default NewGame;
