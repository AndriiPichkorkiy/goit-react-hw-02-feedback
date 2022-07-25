const { default: styled } = require('styled-components');

const Form = styled.div`
  --white: rgba(255, 255, 255, 0.3);

  height: 35rem;
  width: 20rem;

  background: var(--white);
  padding: 3em;
  border-radius: 20px;
  border-left: 1px solid var(--white);
  border-top: 1px solid var(--white);
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover {
    margin: 4px;
  }
`;

export default Form;
