export const formatDate = (date: Date | string): string => {
  date = typeof date === "string" ? new Date(date) : date;
  const today = new Date();
  const diff = today.getTime() - date.getTime();
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffWeeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
  const diffMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  const diffYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  if (diffYears > 0) {
    return diffYears === 1 ? `${diffYears} year ago` : `${diffYears} years ago`;
  }
  if (diffMonths > 0) {
    return diffMonths === 1
      ? `${diffMonths} month ago`
      : `${diffMonths} months ago`;
  }
  if (diffWeeks > 0) {
    return diffWeeks === 1 ? `${diffWeeks} week ago` : `${diffWeeks} weeks ago`;
  }
  if (diffDays > 0) {
    return diffDays === 1 ? `${diffDays} day ago` : `${diffDays} days ago`;
  }
  if (diffHours > 0) {
    return diffHours === 1 ? `${diffHours} hour ago` : `${diffHours} hours ago`;
  }
  if (diffMinutes > 0) {
    return diffMinutes === 1
      ? `${diffMinutes} minute ago`
      : `${diffMinutes} minutes ago`;
  }
  return "Just now";
};
