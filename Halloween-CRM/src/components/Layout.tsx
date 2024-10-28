import { Box } from "@mui/material";
import Sidebar from "./SideBar";
interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Box component="main" sx={{ padding: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
export default Layout;
