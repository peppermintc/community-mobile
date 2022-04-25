export const formatWrittenAt = (writtenAt: string): string => {
  const [writtenDate, writtenTime] = writtenAt.split("T");
  const [writtenYear, writtenMonth, writtenDay] = writtenDate
    .split("-")
    .map((v) => Number(v));
  const [writtenHour, writtenMinute, writtenSecond] = writtenTime
    .split(":")
    .map((v) => Number(v));

  const writtenDateGetTime = new Date(
    writtenYear,
    writtenMonth - 1,
    writtenDay,
    writtenHour,
    writtenMinute,
    writtenSecond,
  ).getTime();
  const currentDateGetTime = new Date().getTime();

  const minuteDiff = (currentDateGetTime - writtenDateGetTime) / 1000 / 60;
  const hourDiff = (currentDateGetTime - writtenDateGetTime) / 1000 / 60 / 60;

  if (minuteDiff < 1) return "방금 전";
  if (hourDiff < 1) return `${Math.floor(minuteDiff)}분 전`;
  if (hourDiff < 24) return `${Math.floor(hourDiff)}시간 전`;

  return `${writtenYear}-${writtenMonth}-${writtenDay}`;
};
