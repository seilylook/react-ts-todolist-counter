import React, { CSSProperties, useCallback } from 'react';
import { Todo } from '../modules/todos';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

const TodoItem = ({ todo, onToggle, onRemove }: TodoItemProps) => {
  const textStyle: CSSProperties = {
    textDecoration: todo.done ? 'line-through' : 'none',
  };

  const removeStyle: CSSProperties = {
    marginLeft: 8,
    color: 'red',
  };

  const handleToggle = useCallback(() => {
    onToggle(todo.id);
  }, [todo, onToggle]);

  const handleRemove = useCallback(() => {
    onRemove(todo.id);
  }, [todo, onRemove]);

  return (
    <li>
      <span onClick={handleToggle} style={textStyle}>
        {todo.text}
      </span>
      <span onClick={handleRemove} style={removeStyle}>
        (x)
      </span>
    </li>
  );
};

export default TodoItem;
