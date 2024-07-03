// react router dom
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// react query library
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import components
import Dashboard from "./pages/Dashboard.jsx";
import Account from "./pages/Account.jsx";
import Cabins from "./pages/Cabins.jsx";
import Bookings from "./pages/Bookings.jsx";
import Login from "./pages/Login.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Users from "./pages/Users.jsx";
import Settings from "./pages/Settings.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import AppLayout from "./ui/AppLayout.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});
function App() {
  return (
    //   similar idea to context api
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to={"dashboard"} />} />
          {/*this called layout route so,isn't have to path*/}
          <Route element={<AppLayout />}>
            {/*these is belong to AppLayout
            to make a part of pages say header and nav
            render is all of the and content is <Outlet/>

            */}
            <Route path={"dashboard"} element={<Dashboard />} />
            <Route path={"account"} element={<Account />} />
            <Route path={"cabins"} element={<Cabins />} />
            <Route path={"bookings"} element={<Bookings />} />

            <Route path={"settings"} element={<Settings />} />
            <Route path={"users"} element={<Users />} />
          </Route>
          <Route path={"login"} element={<Login />} />
          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position={"top-center"}
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: { duration: 4000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}
export default App;
