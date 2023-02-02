import { render, screen } from "@testing-library/react"
import Login from "../src/page_components/login"
import Home from '../src/pages/index';

describe('Home',()=>{
  // NOTE:
  // Hi!, I'm sorry cannot testing this project because I got error "jest render syntax error"
  // i have tried to solve it in the following way
    // https://stackoverflow.com/questions/56806193/jest-syntaxerror-unexpected-token
    // https://stackoverflow.com/questions/41841968/react-jest-causing-syntaxerror-unexpected-token
    // https://stackoverflow.com/questions/56952728/jest-tests-on-react-components-unexpected-token
  // I am very happy to be helped to solve this problem
  // Thank you! ✨
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})