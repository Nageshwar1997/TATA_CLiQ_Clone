import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="w-full max-h-screen min-h-screen h-full overflow-y-scroll scrollbar-none relative">
      <Header />
      <main className="w-full h-full">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
