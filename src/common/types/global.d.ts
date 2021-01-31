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
  getUser?: () => void;
  getAccessKey?: () => string;
}