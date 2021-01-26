interface InputProps {
  value?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface HeaderProps {
  menu?: Array<Menu>;
  bell?: boolean;
}
