import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ChangeEvent, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const data = await fetch("http://127.0.0.1:8000/");

  const res = await data.json();

  return {
    props: { res },
  };
}

interface dados {
  id?: number;
  name?: string;
  desc?: string;
}

export default function Home({ res }: any) {
  const [name, setName] = useState<string>();

  const sub = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post("http://127.0.0.1:8000/", {
      name,
    });
  };

  return (
    <>
      <form onSubmit={sub}>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button type="submit">ok</button>
      </form>
      {res.map((d: dados) => {
        return (
          <div key={d.id}>
            <p>{d.name}</p>
            <p>{d.desc}</p>
          </div>
        );
      })}
    </>
  );
}
