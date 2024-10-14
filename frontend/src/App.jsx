import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="max-w-screen-2xl max-h-screen min-h-screen w-full h-full">
      <Header/>
      <main>
        <Outlet />
      </main>
      <Header />
    </div>
  );
}

export default App;
