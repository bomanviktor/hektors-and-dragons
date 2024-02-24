import { Character } from "../components/NewGame/createCharacter";
import { Player } from "./player";
import { Stage } from "./stage";

export class GameState {
  chapter: string;
  partyName: string;
  difficulty: string;
  players: Player[];
  stage: Stage;

  constructor(
    partyName: string,
    difficulty: string,
    players: Character[],
    chapter = "goetia",
    stage = new Stage("goetia", 2, 0, 0),
  ) {
    this.chapter = chapter;
    this.partyName = partyName;
    this.difficulty = difficulty;
    this.players = Player.getPlayers(players);
    this.stage = stage;
  }
}
