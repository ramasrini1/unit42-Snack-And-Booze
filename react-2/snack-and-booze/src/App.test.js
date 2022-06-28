import { render } from '@testing-library/react';
import App from './App';
import NavBar from "./NavBar";
import {toBeInTheDocument, toHaveClass} from '@testing-library/jest-dom'
import {MemoryRouter} from 'react-router-dom';

test('/nav bar links', () => {
  const {getByText} = render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(getByText('Food Menu')).toBeInTheDocument();
  
});

// it ('renders without crashing', () => {
//   render(<MemoryRouter>  <NavBar /></MemoryRouter>);
// });