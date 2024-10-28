import { Box } from "@mui/material";
import Sidebar from "./SideBar";
import TopBar from "./TopBar";
import { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
        <Box component="main" sx={{ padding: 3, mt: 10 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
export default Layout;
