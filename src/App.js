import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/helplayout/HelpLayout";
import FAQ from "./pages/help/FAQ";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import CarreerLayout from "./layouts/carreerlayout/CarreerLayout";
import Careers, { carreerLoader } from "./pages/careers/Careers";
import CareerDetails, { detailsLoader } from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route
        path="carreers"
        element={<CarreerLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={carreerLoader} />
        <Route path=":id" element={<CareerDetails />} loader={detailsLoader} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
