import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MainInteraction from "./pages/MainInteraction";
import LiveStream from "./pages/LiveStream";
import PasswordReset from "./pages/PasswordReset";
import MainLogin from "./pages/MainLogin";
import LoginAppGivingDashboard from "./pages/LoginAppGivingDashboard";
import LoginAppDashboard from "./pages/LoginAppDashboard";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/maininteraction":
        title = "";
        metaDescription = "";
        break;
      case "/livestream":
        title = "";
        metaDescription = "";
        break;
      case "/passwordreset":
        title = "";
        metaDescription = "";
        break;
      case "/mainlogin":
        title = "";
        metaDescription = "";
        break;
      case "/loginappgivingdashboard":
        title = "";
        metaDescription = "";
        break;
      case "/loginappdashboard":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/maininteraction" element={<MainInteraction />} />
      <Route path="/livestream" element={<LiveStream />} />
      <Route path="/passwordreset" element={<PasswordReset />} />
      <Route path="/mainlogin" element={<MainLogin />} />
      <Route
        path="/loginappgivingdashboard"
        element={<LoginAppGivingDashboard />}
      />
      <Route path="/loginappdashboard" element={<LoginAppDashboard />} />
    </Routes>
  );
}
export default App;
