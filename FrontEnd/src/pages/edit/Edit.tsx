import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Edit = () => {
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const parma = useParams();

  const id = parma.id;

  const sub = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/update/${id}`);
  };

  return (
    <div className="">
      <form onSubmit={sub}>
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <input
          type="date"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDate(e.target.value)
          }
        />
        <button type="submit">editar</button>
      </form>
    </div>
  );
};

export default Edit;
