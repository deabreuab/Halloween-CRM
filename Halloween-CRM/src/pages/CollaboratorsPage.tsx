import AddBotton from "../components/AddBotton";
import CollaboratorsTable from "../components/CollaboratorTable";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/SideBar";

const CollaboratorsPage: React.FC = () => {
  return (
    <Layout>
      <div>
        <SearchBar />
        <AddBotton />
        <Sidebar />
        <CollaboratorsTable collaborators={[]} />
      </div>
    </Layout>
  );
};

export default CollaboratorsPage;
