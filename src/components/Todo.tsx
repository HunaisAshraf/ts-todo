import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import ItemLists from "./ItemLists";
import { Item } from "../utils/type";


const Todo = () => {
  const [task, setTask] = useState<Item[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTask((prev) => [...prev, { id: new Date().toString(), task: input }]);
    setInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input type="text" input={input} setInput={setInput} />
        <Button>Submit</Button>
      </form>
      <div className="mt-2 max-h-[400px] overflow-auto p-2">
        <ItemLists task={task} setTask={setTask}/>
      </div>
    </>
  );
};

export default Todo;
