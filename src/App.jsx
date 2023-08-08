import { Heading } from '@chakra-ui/react';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
import { VStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';

function App() {

  // Initial todo Array
  const initialTodos = [
    {
      id: 1,
      body: "Exercise time at 5:00 AM",
    },
    {
      id: 2,
      body: "Breakfast time at 8:00 AM",
    },
  ];

  // useState function to set initial todo
  const [todos, setTodos] = useState(initialTodos);

  // A function to delete the todo element in todoList
  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  // A function that initially added some todos on screen refresh
  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  // useColorMode function to change the theme color
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack padding={4}>
      {/* Button that make changes to theme color */}
      <IconButton icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} isRound="true" size={'lg'} alignSelf={'flex-end'} onClick={toggleColorMode}></IconButton>

      {/* Main Heading */}
      <Heading mb={8} fontWeight={'extrabold'} size={'2xl'} bgGradient='linear(to-r, pink.500, pink.300, blue.300)' bgClip={'text'}>TODO APPLICATION</Heading>

      {/* A component that displays a todoList */}
      <TodoList todos={todos} deleteTodo={deleteTodo} />

      {/* A component for adding a new todo element */}
      <AddTodo addTodo={addTodo} />
    </VStack>
  );

}

export default App;
