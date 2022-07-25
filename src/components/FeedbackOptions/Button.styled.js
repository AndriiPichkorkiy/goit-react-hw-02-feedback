const { default: styled } = require('styled-components');

const Button = styled.button`
  --white: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  margin: 0.5rem 0.5rem;
  background: transparent;
  width: 6rem;
  padding: 1em;
  /* margin-bottom: 2em; */
  border: none;
  border-left: 1px solid var(--white);
  border-top: 1px solid var(--white);

  border-radius: 0.5rem;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
`;

export default Button;
