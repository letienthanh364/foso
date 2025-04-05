import "./App.css";
import ScrollToTop from "./components/utils/ScrollToTop";
import useRouteElements from "./routes/useRouteElements";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import LoadingPage from "./components/_loadingComponents/LoadingPage";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Toaster } from "sonner";
import useAppStores from "./_stores/app.store";

function AppIner() {
  const routes = useRouteElements();
  const { pageIsLoading } = useAppStores();
  return (
    <div
      style={{
        minHeight: "inherit",
        overflowY: "scroll",
      }}
    >
      <Toaster position="top-center" />
      {routes}
      {pageIsLoading && <LoadingPage />}
    </div>
  );
}

function App() {
  return (
    <ScrollToTop>
      <PrimeReactProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <AppIner />
        </LocalizationProvider>
      </PrimeReactProvider>
    </ScrollToTop>
  );
}

export default App;
