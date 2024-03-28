import { ReactSetState } from "../utils/type";

type Input = {
  type: "text" | "number";
  input: string;
  setInput: ReactSetState<string>;
};

const Input = ({ type, input, setInput }: Input) => {
  return (
    <>
      <input
        type={type}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 rounded"
        required
      />
    </>
  );
};

export default Input;
