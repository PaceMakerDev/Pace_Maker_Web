interface Menu {
  name: string;
  link: string;
}

interface LoginInput {
  email: string;
  password: string;
}

interface AccountState {
  isLogin: boolean;
  getUser: () => User | null;
  getAccessKey: () => string;
}

interface User {
  id: number;
  name: string;
  major: string;
  email: string;
}