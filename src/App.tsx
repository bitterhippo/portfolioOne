import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { SideBar } from "./components/SideBar/SideBar";
import { ContentWindow, LayOutContainer } from "./AppStyles";
import Home from "./pages/Home";

export default function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <LayOutContainer>
      <SideBar isMobile={false} isOpen={isSideBarOpen} />
      <ContentWindow isSideBarOpen={isSideBarOpen} isPrimary={true}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ContentWindow>
    </LayOutContainer>
  );
}
