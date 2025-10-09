import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { SideBar } from "./components/SideBar/SideBar";
import { ContentWindow, LayOutContainer } from "./AppStyles";

//Views
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
import Projects from "./pages/Projects/Projects";

export default function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const buttonHandler = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <LayOutContainer>
      <SideBar isMobile={false} isOpen={isSideBarOpen} />
      <ContentWindow isSideBarOpen={isSideBarOpen} isPrimary={true}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </ContentWindow>
    </LayOutContainer>
  );
}
