import { render, screen } from '@testing-library/react';

import ChatTextInput from './ChatTextInput';

describe('ChatTextInput', () => {
  const defaultProps = {
    writer: null,
    loading: false,
    onAssign: () => console.log('onAssign'),
    onSubmit: () => console.log('onSubmit')

  };

  const writer = {
    name: "Misael",
    photo: "https://s3-alpha-sig.figma.com/img/dc43/b407/978aff670ff4902adb81a3ec058e1730?Expires=1687737600&Signature=W2ODZx0vKMB1cYZdulLA3ok2s4twbHyMDN5~xrlr4so9ZGdWvXvXKoJ1XAMvVByF5IVNYABUUKLiHwsCGogXVuF~kmEhi48qHUxTXJ0rBaQGS93z22TqR7j7d5oYa45HywDcSFx6eFgpD52S~JCSrGWEsCn~WLPCcmE252xshYrU8PxFNY3UPtU6L1tRgbiu2xL7JVAEUIfiDcdrFSYOjhm9mJq2fmdtvxfO3hR7KW0gt~dFHbLs2WXMYOIIe~P8V2-xvuR1PWuiLFaVM8sB2C2AtoEUVwvLBZTVyXiZ7E-ecv9DOybKji2YZN9yUzalDEcki0R9YXkukug-lKmNXw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  }

  it('renders on the screen', () => {
    render(<ChatTextInput {...defaultProps} />)
    expect(screen.getByText("Assign myself and reply")).toBeInTheDocument();
  });

  it('renders the initial value in the input field', () => {
    render(<ChatTextInput {...defaultProps} writer={writer} value="Initial value" />);
    screen.debug()
    expect(screen.getByRole('textbox')).toHaveValue('Initial value');
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
