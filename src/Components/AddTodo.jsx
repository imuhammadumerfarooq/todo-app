import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import { useState } from 'react'
import { nanoid } from 'nanoid';

function AddTodo({ addTodo }) {

    // Function that dislays a badge of no content if user starts to add an empty todo 
    const toast = useToast();

    function handleSubmit(e) {
        e.preventDefault();
        if (!content) {
            toast({
                title: 'No Content',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
            return
        }

        // To add a new todo with random id
        const todo = {
            id: nanoid(),
            body: content,
        };
        addTodo(todo);
        setContent('');
    }

    // useState function to set content
    const [content, setContent] = useState('')

    return (
        <form onSubmit={handleSubmit}>
            <HStack p={'8'}>
                {/* An input field through which we can add a new todo element */}
                <Input variant={'filled'} placeholder='Add Your Todo Here' value={content} onChange={(e) => setContent(e.target.value)} />

                {/* A button to add a new todo to todoList */}
                <Button colorScheme='pink' px={'8'} type='submit'>Add ToDo</Button>
            </HStack>
        </form>
    )
}

export default AddTodo;