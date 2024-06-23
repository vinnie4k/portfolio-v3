export enum Project {
  Announcements,
  Uplift,
  Status,
  Grabbit,
  Volume,
  Scribbly,
}

export enum Experience {
  Glassdoor,
  Terra,
  Llounge,
  AppDev,
}

export interface IconProps {
  width: number;
  height?: number;
  className?: string;
}

// Day: 6am-8am, 8am-11am, 11am-2pm, 2pm-5pm, 5pm-8pm
// Night: 8pm-10pm, 10pm-12am, 12am-3am, 3am-6am
export const timeIntervals = [
  [6, 7],
  [8, 10],
  [11, 13],
  [13, 17],
  [17, 19],
  [20, 21],
  [22, 23],
  [0, 2],
  [3, 5],
];
