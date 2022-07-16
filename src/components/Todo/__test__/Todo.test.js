import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <Todo numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

const addTodo = (todos) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByText(/Add/i);
  todos.forEach((todo) => {
    fireEvent.change(inputElement, { target: { value: todo } });
    fireEvent.click(buttonElement);
  });
};

describe('Todo', () => {
  it('should render same text passed into title prop', () => {
    render(<MockTodo />);
    addTodo(['Test']);
    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });

  it('should render three elements when add three elements', () => {
    render(<MockTodo />);
    addTodo(['Test1', 'Test2', 'Test3']);
    expect(screen.getAllByTestId('todo-item').length).toBe(3);
  });
  it('should not have completed class when initially rendered', () => {
    render(<MockTodo />);
    addTodo(['Test1']);
    expect(screen.getByTestId('todo-item')).not.toHaveClass('todo-item-active');
  });

  it('should  have completed class when clicked on todo', () => {
    render(<MockTodo />);
    addTodo(['Test1']);
    fireEvent.click(screen.getByTestId('todo-item'));
    expect(screen.getByTestId('todo-item')).toHaveClass('todo-item-active');
  });
});
