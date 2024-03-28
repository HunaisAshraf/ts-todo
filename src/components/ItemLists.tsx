import Button from "./Button";
import { MdDelete } from "react-icons/md";
import { Item, ReactSetState } from "../utils/type";

type ItemList = {
  task: Item[];
  setTask: ReactSetState<Item[]>;
};

const ItemLists = ({ task, setTask }: ItemList) => {
  const handleDelete = (id: string) => {
    setTask((prev) => prev.filter((data) => data.id !== id));
  };
  return task.map((t) => (
    <div className="flex justify-between items-center my-2">
      <p key={t.id}>{t.task}</p>
      <Button onClick={() => handleDelete(t.id)}>
        <MdDelete />
      </Button>
    </div>
  ));
};

export default ItemLists;
