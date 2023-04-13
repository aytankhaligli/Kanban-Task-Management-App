import { useDispatch, useSelector } from "react-redux";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";
import { changeTheme } from "./redux/features/theme/themeSlice";
import TaskModal from "./components/TaskModal";
import AddBoardModal from "./components/AddBoardModal";

function App() {
  const { data } = useSelector((state) => state.data);
  const { modalData } = useSelector((state) => state.modal);
  return (
    <div className={`flex dark ${data ? "h-full" : "h-screen"} `}>
      <Sidebar />
      <MainPage />
      {modalData === "addBoard" && <AddBoardModal />}
      {modalData === "viewTask" && <TaskModal />}
    </div>
  );
}

export default App;
