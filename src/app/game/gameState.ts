import { Character } from "../components/NewGame/createCharacter";
import { Player } from "./player";
import { Stage } from "./stage";

export class GameState {
  chapter: string;
  partyName: string;
  difficulty: string;
  players: Player[];
  stage: Stage;
  night: boolean;

  constructor(
    partyName: string,
    difficulty: string,
    players: Character[],
    chapter = "elysia",
    stage = new Stage("elysia", -1, 3, 0),
    night = false
  ) {
    this.chapter = chapter;
    this.partyName = partyName;
    this.difficulty = difficulty;
    this.players = Player.getPlayers(players);
    this.stage = stage;
    this.night = night;
  }
}
