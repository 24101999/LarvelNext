import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
interface d {
  id?: number;
  name?: string;
  date?: string;
}

const Home = () => {
  const [dados, setDados] = useState<Array<d>>();

  const nav = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/").then((res) => {
      setDados(res.data);
    });
  }, []);

  const del = (e: number | undefined) => {
    console.log(e);
    axios.delete(`http://localhost:8000/delete/${e}`);

    setTimeout(() => {
      axios.get("http://localhost:8000/").then((res) => {
        setDados(res.data);
      });
    }, 500);
  };

  return (
    <div className="">
      <button onClick={() => nav("/admin")}>Admin</button>
      {dados
        ? dados.map((d: d) => {
            return (
              <div key={d.id} className="">
                <p>{d.name}</p>
                <p>{d.date}</p>
                <button onClick={() => nav(`/item/${d.id}`)}>item</button>
                <button onClick={() => del(d.id)}>excluir</button>
                <button onClick={() => nav(`editar/${d.id}`)}>edit</button>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Home;
