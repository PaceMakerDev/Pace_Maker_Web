export const getUserId = (): number | null => {
  const userId = localStorage.getItem('userId');
  if (!userId) {
    return null;
  }
  return parseInt(userId);
};
