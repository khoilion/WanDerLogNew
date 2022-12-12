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
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase/firebase-config";
import { useEffect } from "react";
import { useConnection } from "./config/redux/connection/index";
import Logintohome from "./Page/LoginToHome/logintohome";
import MobileApp from "./Page/MobileApp/mobileapp";
import Blog from "./Page/BLog/blog";
import Security from "./Page/Securitys/security";

function App() {
  const { setIsLoginAction } = useConnection();
  const { setUserInfoAction } = useConnection();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // check if user is logged in
      if (user) {
        setIsLoginAction(true); // set isLogin to true
        setUserInfoAction(user); // set user info
        console.log(user, "user123");
      }
    });
  }, []);

  return (
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
        <Route path="/tp" element={<TP />} />
        <Route path="/drive" element={<Drive />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/LoginToHome" element={<Logintohome />} />
        <Route path="/mobileApp" element={<MobileApp />} />
        <Route path="/blog" element={ <Blog /> } />
        <Route path="/security" element={<Security />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
