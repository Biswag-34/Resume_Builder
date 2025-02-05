import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homes";
import ResumeEditor from "./pages/ResumeEditor";
import DownloadPage from "./pages/DownloadPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume-editor" element={<ResumeEditor />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
