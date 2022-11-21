import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Page/Homepage/homepage";
import CreatePlan from "./Page/CreatePlan/createplan";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import TravelGuide from "./Page/TravelGuide/traveguide";
import TP from "./Page/Tp/tp";
import Drive from "./Page/Drive/drive";
import Guides from "./Page/Guides/guides";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="*"
              element={<h1 className="text-center p-5 fw-700">404 Not Found</h1>}
            />
            <Route path="/createplan" element={<CreatePlan />} />
            <Route path="/recommendations" element={<TravelGuide />} />
            <Route path="/tp" element={ <TP/>} />
            <Route path="/drive" element={ <Drive/>} />
            <Route path="/guides" element={<Guides/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
