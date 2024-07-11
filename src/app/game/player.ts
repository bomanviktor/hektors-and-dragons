import { Character } from "../components/NewGame/createCharacter";
import { Stats } from "../components/NewGame/races";

export class Player {
  name: string;
  playerClass: string;
  level: number;
  stats: Stats;
  constructor(
    name: string,
    playerClass: string,
    level: number = 1,
    stats: Stats,
  ) {
    this.name = name;
    this.playerClass = playerClass;
    this.level = level;
    this.stats = stats;
  }

  public static getPlayers = (characters: Character[]): Player[] => {
    return characters.map(
      (c) => new Player(c.name, c.class, c.level, c.race.stats),
    );
  };
}
