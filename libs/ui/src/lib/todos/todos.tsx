import { Todo } from '@dm/models';
import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TodosProps {
  todos: Todo[];
}

const StyledTodos = styled.div`
  color: #000;
`;

export function Todos({ todos }: TodosProps) {
  return (
    <StyledTodos>
      <ul>
        {todos.map((t) => (
          <li className={'todo'}>{t.title}!!</li>
        ))}
      </ul>
    </StyledTodos>
  );
}

export default Todos;
