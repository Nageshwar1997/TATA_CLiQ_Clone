import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="max-w-full max-h-screen min-h-screen w-full h-full">
      <Header />
      <main className="w-full h-full scrollbar-none">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
