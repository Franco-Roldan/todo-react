import Todo from "./Todo"
import TodoFilter from "./TodoFilters"

// este componente contiene a las tares (componet: Todo)
const ContentList = ({todos, handleSetComplete, handleDeleteTodo, activeFilter, showTodosActive, showTodosAll, showTodosCompleted, handleDeleteCompleted}) => {
        
    
    return(
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            
            <TodoFilter
                activeFilter= {activeFilter}
                total = {todos.length}
                handleDeleteCompleted={handleDeleteCompleted}
                showTodosActive={showTodosActive}
                showTodosAll={showTodosAll}
                showTodosCompleted={showTodosCompleted}
            /> 
           
            {todos.map(todo => {
                return (
                    <Todo  key={todo.id} todo={todo}  handleSetComplete={handleSetComplete}  handleDeleteTodo={handleDeleteTodo}/>
                ) 
            })}                
        
        </div>
    )
}

export default ContentList