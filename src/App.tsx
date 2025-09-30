import { Routes, Route } from "react-router-dom";
import { SideBar } from "./components/SideBar/SideBar";
import { LayOutContainer } from "./AppStyles";
import Home from "./pages/Home";

export default function App() {
  return (
    <LayOutContainer>
      <SideBar isMobile={false} isOpen={true} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </LayOutContainer>
  );
}
