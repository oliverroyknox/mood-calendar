export enum Mood {
  HAPPY = 0,
  FINE = 1,
  SAD = 2,
}

export type MoodMap = {
  year: number; // Primary key
  [month: number]: {
    [day: number]: Mood;
  };
};
