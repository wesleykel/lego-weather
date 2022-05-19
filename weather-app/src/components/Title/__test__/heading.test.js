import { render, screen } from '@testing-library/react';
import Heading from '../../heading';


it('should render a the title text  when pass as prop',() => {
  render(<Heading title={"Weather App"}/>);
  const linkElement = screen.getByText(/weather app/i);
  expect(linkElement).toBeInTheDocument();
});
