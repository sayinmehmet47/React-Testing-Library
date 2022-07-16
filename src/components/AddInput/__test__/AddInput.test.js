import { fireEvent, render, screen } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodos = jest.fn();

describe('AddInput', () => {
  it('should render without crashing', () => {
    render(<AddInput />);
  });

  it('should render the AddInput', () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });
  it('should able to type in input', () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    inputElement.value = 'test';
    expect(inputElement.value).toBe('test');
  });

  it('should have empty input when add button is clicked', () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const addButton = screen.getByText(/Add/i);
    fireEvent.change(inputElement, { target: { value: 'test' } });
    fireEvent.click(addButton);
    expect(inputElement.value).toBe('');
  });
});
