export const useAccessKey = (): string => {
  let accessKey: string | null = null;

  if (typeof window !== 'undefined') {
    accessKey = localStorage.getItem('accessKey');
  }
  if (!accessKey) {
    accessKey = '';
  }
  return accessKey;
};
