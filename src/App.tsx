import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <>
      <header className="flex w-screen justify-center">
        <div className="flex w-full max-w-7xl items-center justify-between p-2">
          <img src={logo} alt="Logo da ABRIC" className="h-12" />
          <a className="cursor-pointer">
            <h1 className="text-2xl font-bold text-green-700">Site</h1>
          </a>
        </div>
      </header>
    </>
  );
}

export default App;
