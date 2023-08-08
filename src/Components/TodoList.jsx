import React from "react";
import { VStack, HStack, Text, IconButton, StackDivider, Spacer, Badge } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function TodoList({ todos, deleteTodo }) {

    // Badge statement if there is no todo in todoList
    if (!todos.length) {
        return (
            <Badge colorScheme="green" p={'4'} m={'4'} borderRadius={"lg"}>
                No Todos, Yay!!!
            </Badge>
        )
    }

    return (
        <VStack divider={<StackDivider />} borderColor={"gray.100"} borderWidth={'2px'} p={'4'} borderRadius={"lg"} w={'100%'} maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }} alignItems={"stretch"}>
            {todos.map((todo) => (
                <HStack>
                    {/* Text that displays a todo content in todoList */}
                    <Text>{todo.body}</Text>

                    {/* Spacer that creates a space between todo content and delete button in todoList */}
                    <Spacer />

                    {/* Button that deletes the todo from todoList */}
                    <IconButton icon={<FaTrash />} isRound='true' onClick={() => deleteTodo(todo.id)} />
                </HStack>
            ))}
        </VStack>
    );
}

export default TodoList;
