import { Outlet } from "react-router";
import Header from "./components/Header";
import DarkModeToggle from "./components/ThemeSwitch";

export default function App() {
  return (
    <div>
      <DarkModeToggle />
      <Header />
      <Outlet />
    </div>
  );
}
