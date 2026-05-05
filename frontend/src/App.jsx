import TaskStatCardContainer from "./layout/TaskStatCardContainer"
import FilterCardContainer from "./layout/FilterCardContainer"
import TaskProvider from "./context/TaskContext"
import AddProjectAndTasksContainer from "./layout/AddProjectAndTasksContainer"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
export default function App() {
  return (<>
    <Navbar />
    <TaskProvider>
      <TaskStatCardContainer />
      <AddProjectAndTasksContainer />
      <FilterCardContainer />
    </TaskProvider>
    <Footer />

  </>)
}