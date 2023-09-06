// contiene a todos los filtros

const ContentFilter = ({children}) => {
    return (
        <div className=" flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600 sm:text-11">
            {children}
        </div>
    )
}

// total de tareas
const ItemsLeft = ({total = 0}) => {
    return ( 
        <div className="sm:block hidden ">
            <p className="text-gray-400 text-sm"> {total} Items left</p>
        </div>
    )
}

// contenedor de botones 
const ContentFilterButton = ({children}) => {
    return (
        <div className="flex items-center space-x-2 text-sm">
            {children}
        </div>
    )
}

const FilterButton = ({action, active, filter}) => {
    return (
        <button onClick={action} className={
                `hover:text-white cursor-pointer transition-all duration-300 ease-in-out
                ${active.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-400' : 'text-gray-400'}`
            }>
            {filter}
        </button>
    )
}


export {ContentFilter, ItemsLeft, ContentFilterButton, FilterButton};