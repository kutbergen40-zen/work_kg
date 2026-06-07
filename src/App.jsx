import Header from "./components/layout/Header/Header";

import Footer from "./components/layout/Footer/Footer";

import AppRoutes from "./routes";

function App() {
  return (
    <>
      <Header />

      <AppRoutes />

      <Footer />
    </>
  );
}

export default App;