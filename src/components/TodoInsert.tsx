import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';

type TodoInsertProps = {
  onInsert: (text: string) => void;
};

const TodoInsert = ({ onInsert }: TodoInsertProps) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      onInsert(value);
      setValue('');
    },
    [value, onInsert]
  );

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder='할 일을 입력하세요.'
        value={value}
        onChange={onChange}
      />
      <button type='submit'>등록</button>
    </form>
  );
};

export default TodoInsert;
