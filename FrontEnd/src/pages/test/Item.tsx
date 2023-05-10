import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface d {
  id?: number;
  name?: string;
}

const Item = () => {
  const param = useParams();
  const id = param.id;
  const [dados, setDados] = useState<d>();

  useEffect(() => {
    axios.get(`http://localhost:8000/${id}`).then((res) => {
      setDados(res.data);
    });
  }, []);

  return (
    <div className="">
      <h1>{dados && dados.name}</h1>
    </div>
  );
};

export default Item;
