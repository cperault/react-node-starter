import { Route, Routes } from "react-router-dom";
import { ToastProvider } from "./providers/ToastProvider";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PageTwo from "./pages/PageTwo";

function App() {
  return (
    <ToastProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pagetwo" element={<PageTwo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ToastProvider>
  );
}

export default App;
