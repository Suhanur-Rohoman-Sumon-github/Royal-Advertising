import { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home";
import Footer from "./pages/shered/footer/Footer";
import ComingSoon from "./components/home/comingSoon/ComingSoon";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Home />
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
