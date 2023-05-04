import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./global/Topbar";
import SidebarNav from "./global/Sidebar";
import Dashboard from "./dashboard";
import Users from "./users";
import Contacts from "./contacts";
import Invoices from "./invoices";
import UserForm from "./userform";
import ProductForm from "./productForm";
import Bar from "./bar";
import Pie from "./pie";
import Line from "./line";
import Geography from "./geography";

function AdminPage() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarNav />
          <main className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/users" element={<Users/>}></Route>
            <Route path="/contacts" element={<Contacts/>}></Route>
            <Route path="/invoices" element={<Invoices/>}></Route>
            <Route path="/userform" element={<UserForm/>}></Route>
            <Route path="/productform" element={<ProductForm/>}></Route>
            <Route path="/bar" element={<Bar/>}></Route>
            <Route path="/pie" element={<Pie/>}></Route>
            <Route path="/line" element={<Line/>}></Route>
            <Route path="/geography" element={<Geography/>}></Route>
          </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AdminPage;
