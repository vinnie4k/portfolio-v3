export const inInterval = (startHour: number, endHour: number): boolean => {
  const now = new Date();
  if (startHour > endHour) {
    // After midnight (ex: 22, 0)
    return now.getHours() >= startHour || now.getHours() <= endHour;
  }
  return now.getHours() >= startHour && now.getHours() <= endHour;
};
