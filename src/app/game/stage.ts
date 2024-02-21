import { ambiences } from "./sound/ambience";

const camelToKebab = (input: string): string => {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

export enum Direction {
  UP,
  RIGHT,
  DOWN,
  LEFT,
  ABOVE,
  BELOW,
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
  constructor(chapter: string, x: number, y: number, z: number) {
    this.chapter = chapter;
    this.location = { x, y, z };
    this.ambience = "wind-snow-peak";
    this.allowedMoves = [];
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
  }

  setAmbience() {
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
      return `/img/chapters/${this.chapter}/x${this.location.x}y${this.location.y}.png`;
    }
    return `/img/chapters/${this.chapter}/x${this.location.x}y${this.location.y}z${this.location.z}.png`;
  }
}
