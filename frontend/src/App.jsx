import TaskStatCardContainer from "./layout/TaskStatCardContainer"
import FilterCardContainer from "./layout/FilterCardContainer"
import TaskProvider from "./context/TaskContext"
export default function App() {
  return (<>
    <TaskProvider>
      <TaskStatCardContainer />
      <FilterCardContainer />
    </TaskProvider>

  </>)
}