import { ContentFilter , ItemsLeft, ContentFilterButton, FilterButton } from "./ContentFilters"
// componente que agrupa todos los filtros que interactuan con las tareas
const TodoFilter = ({total, activeFilter, showTodosActive, showTodosAll, showTodosCompleted, handleDeleteCompleted}) => {
    return (
        <ContentFilter>
            <ItemsLeft total={total}/>
            <ContentFilterButton>
                <FilterButton action={() => showTodosAll()} active={activeFilter} filter='All'/>
                <FilterButton action={() => showTodosActive()} active={activeFilter} filter='Active'/>
                <FilterButton action={() => showTodosCompleted()} active={activeFilter} filter='Completed'/>
            </ContentFilterButton>
            <button onClick={() => handleDeleteCompleted()} className="bg-red-400 rounded-lg p-1 text-red-900 text-sm hover:text-white cursor-pointer transition-all duration-300 ease-in"> 
                Clear Completed
            </button>

        </ContentFilter>
    )
}


export default TodoFilter;