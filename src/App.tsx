import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { List } from "./components/List";

function App() {
  const [projects, setProjects] = useState<Project[]>([
    {
      title:
        "Estudo e Caracterização do cabelo do milho Zea Mays1 Estudo e Caracterização do cabelo do milho Zea Mays2 Estudo e Caracterização do cabelo do milho Zea Mays1 Estudo e Caracterização do cabelo do milho Zea Mays2 Estudo e Caracterização do cabelo do milho Zea Mays1 Estudo e Caracterização do cabelo do milho Zea Mays2 Estudo e Caracterização do cabelo do milho Zea Mays1 Estudo e Caracterização do cabelo do milho Zea Mays2",
      authors: [
        { name: "Leonardo Prietsch Oliveira" },
        { name: "Muriel Schiling Krohn" },
      ],
    },
    {
      title: "Estudo e Caracterização do cabelo do milho Zea Mays",
      authors: [
        { name: "Leonardo Prietsch Oliveira" },
        { name: "Muriel Schiling Krohn" },
      ],
    },
  ]);

  return (
    <>
      <div className="h-3 fixed bg-red-600 w-[375px]"></div>
      <div className="h-2 fixed bg-amber-400 w-[640px]"></div>
      <div className="h-1 fixed bg-blue-600 w-[768px]"></div>
      <Header />
      <main className="flex flex-col items-center mb-4 md:mb-0 md:min-h-screen md:justify-evenly lg:w-screen lg:flex-row">
        <Form setProjects={setProjects} projects={projects} />
        <List projects={projects} />
      </main>
      <footer className="hidden md:flex justify-center w-full md:fixed bottom-0 justify-self-center bg-gray-300 py-2">
        <span className="font-semi text-primary">
          Desenvolvido por @
          <a
            href="https://github.com/leoprietsch"
            className="appearance-none underline text-darkPrimary hover:cursor-pointer"
          >
            leoprietsch
          </a>
          .
        </span>
      </footer>
    </>
  );
}

export default App;
