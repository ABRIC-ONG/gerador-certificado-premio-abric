import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <>
      <header className="flex w-screen justify-center">
        <div className="flex w-full max-w-7xl items-center justify-between p-2">
          <img src={logo} alt="Logo da ABRIC" className="h-12" />
          <a className="cursor-pointer">
            <h1 className="text-2xl font-bold text-primary">Site</h1>
          </a>
        </div>
      </header>
      <div className="flex w-screen min-h-[500px] justify-center items-center">
        <form className="border-2 border-primary rounded p-5">
          <div className="w-96 flex items-center justify-between">
            <label className="text-primary font-bold w-2/6">
              Título do Projeto
            </label>
            <input
              className="w-3/6 bg-gray-200 appearance-none border-2 border-primary rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              placeholder="Título do Projeto"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
