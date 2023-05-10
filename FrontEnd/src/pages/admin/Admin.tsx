import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const nav = useNavigate();

  const sub = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post("http://localhost:8000/post", { name, date }).then((res) => {
      if (!res.data) {
        nav("/admin");
      } else {
        nav("/");
      }
    });
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
        <button type="submit">enviar</button>
      </form>
    </div>
  );
};

export default Admin;
