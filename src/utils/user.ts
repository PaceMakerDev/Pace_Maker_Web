export const getUserId = (): number | null => {
  const userId = localStorage.getItem('userId');
  if (!userId) {
    return null;
  }
  return parseInt(userId);
};

export const setUesrId = (userId: number): void => {
  localStorage.setItem('userId', JSON.stringify(userId));
}