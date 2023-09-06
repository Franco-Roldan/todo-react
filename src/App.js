import Title from './component/title';
import TodoInput from './component/todoInput';
import ContentList from './component/ContentList';
//import Todo from './component/Todo'
import { useEffect, useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]);



  const addTodo = (title) => {
    const lastID = todos.length > 0 ? todos[todos.length -1].id : 1;
    const newTodo = {
      id: lastID +1,
      title: title,
      completed: false
    }

    const todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
  }

  const handleSetComplete = (id) => {
    const updateTodos = todos.map(todo => {
      if(todo.id === id){
        return {...todo, completed : !todo.completed}
      }
      return todo
    });

    setTodos(updateTodos);
  }

  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredTodo, setFilteredTodo] = useState(todos);

  const handleDeleteTodo = (id) => {
    const updateTodos = todos.filter(todo => todo.id !== id)
    setTodos(updateTodos)
  }

  const handleDeleteCompleted = () => {
    const updateTodos = todos.filter(todo => !todo.completed);
    setTodos(updateTodos);
  }
  const showTodosAll = () =>{
    setActiveFilter('All');
  }
  const showTodosActive = () =>{
    setActiveFilter('Active');
  }
  const showTodosCompleted = () =>{
    setActiveFilter('Completed');
  }

  useEffect(() => {
    if(activeFilter === 'All'){
      setFilteredTodo(todos)
    }else if(activeFilter === 'Active'){
      const activeTodos = todos.filter(todo => todo.completed === false)
      setFilteredTodo(activeTodos)
    }else if(activeFilter === 'Completed'){
      const completedTodos = todos.filter(todo => todo.completed === true)
      setFilteredTodo(completedTodos)
    }
  }, [activeFilter, todos])
  
  return (
    <div className='min-h-screen bg-cover bg-center bg-fixed font-inter h-full text-gray-100 flex items-center justify-center py-20 px-5'
          style={{'background-image': "url('bg-todo.jpg')"}}
    >
      <div className='container flex flex-col max-w-xl'>
          <Title/>
          <TodoInput addTodo={addTodo}/>
          <ContentList 
            todos={filteredTodo} 
            handleSetComplete={handleSetComplete}  
            handleDeleteTodo={handleDeleteTodo}
            handleDeleteCompleted={handleDeleteCompleted}
            activeFilter={activeFilter}
            showTodosActive={showTodosActive}
            showTodosAll={showTodosAll}
            showTodosCompleted={showTodosCompleted}
          />
      </div>
    </div>
  );
}

export default App;
