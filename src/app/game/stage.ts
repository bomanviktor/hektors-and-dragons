import { ambiences } from "./sound/ambience";
import { tracklist } from "./sound/music";

const camelToKebab = (input: string): string => {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

export enum Direction {
  UP = "UP",
  RIGHT = "RIGHT",
  DOWN = "DOWN",
  LEFT = "LEFT",
  ABOVE = "ABOVE",
  BELOW = "BELOW",
}

export enum MusicType {
  BATTLE = "BATTLE_MUSIC",
  BACKGROUND = "BACKGROUND_MUSIC",
  STOP = "STOP_MUSIC",
}

export interface Location {
  x: number;
  y: number;
  z: number;
}

export class Stage {
  chapter: string;
  location: Location;
  allowedMoves: Direction[];
  ambience: string;
  battleMusic: string | undefined;
  backgroundMusic: string | undefined;

  constructor(chapter: string, x: number, y: number, z: number) {
    this.chapter = chapter;
    this.location = { x, y, z };
    this.ambience = "wind-snow-peak";
    this.allowedMoves = [];
    this.setMusic();
  }

  move(direction: Direction) {
    switch (direction) {
      case Direction.UP:
        this.location.y++;
        break;
      case Direction.DOWN:
        this.location.y--;
        break;
      case Direction.LEFT:
        this.location.x--;
        break;
      case Direction.RIGHT:
        this.location.x++;
        break;
      case Direction.ABOVE:
        this.location.z!++;
        break;
      case Direction.BELOW:
        this.location.z!--;
        break;
    }
    this.setAmbience();
    this.setMusic();
  }

  chooseMusic(musicType: string): string | undefined {
    switch (musicType) {
      case "BATTLE_MUSIC":
        return this.battleMusic;
      case "BACKGROUND_MUSIC":
        return this.backgroundMusic;
      case "STOP_MUSIC":
        return "stop";
    }
  }

  private resetMusic(resetBackground: boolean, resetBattle: boolean) {
    if (resetBackground) {
      this.backgroundMusic = undefined;
    }
    if (resetBattle) {
      this.battleMusic = undefined;
    }
  }

  private setMusic() {
    this.resetMusic(true, true);
    for (const [location, coordinates] of Object.entries(tracklist)) {
      for (const coordinate of coordinates) {
        if (
          coordinate.x == this.location.x &&
          coordinate.y == this.location.y &&
          coordinate.z == this.location.z
        ) {
          console.log("location:", location);
          if (location.includes("Battle")) {
            this.battleMusic = `${camelToKebab(location)}`;
          } else {
            this.backgroundMusic = `${camelToKebab(location)}`;
          }
        }
      }
    }
  }

  private setAmbience() {
    for (const [location, coordinates] of Object.entries(ambiences)) {
      for (const coordinate of coordinates) {
        if (
          coordinate.x == this.location.x &&
          coordinate.y == this.location.y &&
          coordinate.z == this.location.z
        ) {
          this.ambience = `${camelToKebab(location)}`;
        }
      }
    }
  }

  getAmbience(): string {
    return this.ambience;
  }

  name(): string {
    if (this.location.z === 0) {
      return `/img/chapters/${this.chapter}/x${this.location.x}y${this.location.y}.jpg`;
    }
    return `/img/chapters/${this.chapter}/x${this.location.x}y${this.location.y}z${this.location.z}.jpg`;
  }
}
