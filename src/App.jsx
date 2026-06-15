import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import AIChat from "./components/ai/AIChat";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <Header />

      <AppRoutes />

      <Footer />

      <AIChat />
    </>
  );
}

export default App;