export enum Direction {
  UP,
  RIGHT,
  DOWN,
  LEFT,
  ABOVE,
  BELOW,
}

export class Stage {
  chapter: string;
  x: number;
  y: number;
  z: number;
  allowedMoves: Direction[];
  constructor(chapter: string, x: number, y: number, z: number) {
    this.chapter = chapter;
    this.x = x;
    this.y = y;
    this.z = z;
    this.allowedMoves = [];
  }

  move(direction: Direction) {
    switch (direction) {
      case Direction.UP:
        this.y++;
        return;
      case Direction.DOWN:
        this.y--;
        return;
      case Direction.LEFT:
        this.x--;
        return;
      case Direction.RIGHT:
        this.x++;
        return;
      case Direction.ABOVE:
        this.z++;
        return;
      case Direction.BELOW:
        this.z--;
        return;
    }
  }

  name(): string {
    if (this.z === 0) {
      return `/img/chapters/${this.chapter}/x${this.x}y${this.y}.png`;
    }
    return `/img/chapters/${this.chapter}/x${this.x}y${this.y}z${this.z}.png`;
  }
}
