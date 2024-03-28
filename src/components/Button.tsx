type Btn = {
  children: JSX.Element | string;
  onClick?: () => void;
};

const Button = ({ children, onClick }: Btn) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
