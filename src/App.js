import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Topbar from "./topbar/Topbar";
import { Routes, Route } from "react-router-dom";
import Write from "./pages/write/Write";
function App() {
  return (
    <div>
      <Topbar />
      <Routes>
        <Route path="/good-life" element={<Home />}></Route>
        <Route path="/post" element={<Single />}></Route>
        <Route path="/write" element={<Write />}></Route>
      </Routes>
    </div>
  );
}

export default App;
