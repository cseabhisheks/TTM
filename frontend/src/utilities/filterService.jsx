// filter logic
export const applyFilters = (tasks, filters) => {
   return tasks.filter((task) => {
        return (
            // projects filtering
            (filters.projects === "all" || task.projectId === Number(filters.projects))
            &&
            (filters.assignee === "all" || task.assignee === filters.assignee)
            &&
            (filters.status === "all" || task.status === filters.status)
        )

    })
}
