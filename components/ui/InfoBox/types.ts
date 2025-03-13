export interface InfoBoxProps {
  heading: string;
  backgroundColor: string;
  textColor?: string;
  buttonInfo: ButtonProps;
  children: React.ReactNode;
}

interface ButtonProps {
  link: string;
  text: string;
  backgroundColor: string;
}
