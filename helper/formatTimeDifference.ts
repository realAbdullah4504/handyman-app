import moment from "moment";

export const formatTimeDifference = (createdAt: string): string => {
  const now = moment();
  const created = moment(createdAt);
  const minutesDifference = now.diff(created, "minutes");

  if (minutesDifference < 60) {
    return `${minutesDifference} minutes ago`;
  } else if (minutesDifference < 1440) {
    const hoursDifference = Math.floor(minutesDifference / 60);
    return `${hoursDifference} hours ago`;
  } else {
    const daysDifference = Math.floor(minutesDifference / 1440);
    return `${daysDifference} days ago`;
  }
};
