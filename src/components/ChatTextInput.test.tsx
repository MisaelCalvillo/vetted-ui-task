import { render, fireEvent, waitFor } from '@testing-library/react';

import ChatTextInput from './ChatTextInput';

describe('ChatTextInput', () => {
  const defaultProps = {
    writer: null,
    onAssign: jest.fn(),
    onSubmit: jest.fn(),
    loading: false,
  };

  it('renders the initial value in the input field', () => {
    const { getByRole } = render(<ChatTextInput {...defaultProps} value="Initial value" />);
    expect(getByRole('textbox')).toHaveValue('Initial value');
  });

  // it('updates the input field as user types', () => {
  //   const { getByRole } = render(<ChatTextInput {...defaultProps} />);
  //   fireEvent.change(getByRole('textbox'), { target: { value: 'User input' } });
  //   expect(getByRole('textbox')).toHaveValue('User input');
  // });

  // it('calls onSubmit when user hits enter', () => {
  //   const mockOnSubmit = jest.fn();
  //   const { getByRole } = render(<ChatTextInput {...defaultProps} onSubmit={mockOnSubmit} />);
  //   fireEvent.change(getByRole('textbox'), { target: { value: 'User input' } });
  //   fireEvent.keyDown(getByRole('textbox'), { key: 'Enter' });
  //   expect(mockOnSubmit).toHaveBeenCalledWith('User input');
  // });

  // it('calls onSubmit when user clicks submit button', () => {
  //   const mockOnSubmit = jest.fn();
  //   const { getByRole } = render(<ChatTextInput {...defaultProps} onSubmit={mockOnSubmit} />);
  //   fireEvent.change(getByRole('textbox'), { target: { value: 'User input' } });
  //   fireEvent.click(getByRole('button', { name: /submit/i }));
  //   expect(mockOnSubmit).toHaveBeenCalledWith('User input');
  // });

  // it('calls onAssign when user clicks assign button', async () => {
  //   const mockOnAssign = jest.fn();
  //   const { getByText } = render(<ChatTextInput {...defaultProps} onAssign={mockOnAssign} />);
  //   fireEvent.click(getByText('Assign myself and reply'));
  //   await waitFor(() => expect(mockOnAssign).toHaveBeenCalled());
  // });
});
