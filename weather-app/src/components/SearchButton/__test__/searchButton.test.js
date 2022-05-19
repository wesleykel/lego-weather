import { render, screen ,fireEvent} from '@testing-library/react';

import SearchButton from '../searchButton';


it('should render a the button label text  when pass as prop',() => {
  render(<SearchButton label={"Click Me"}/>);
  const linkElement = screen.getByText(/click me/i);
  expect(linkElement).toBeInTheDocument();
});

it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    render(<SearchButton apiCall={handleClick} label={"Click me"}></SearchButton>)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })