const { default: styled, css } = require('styled-components');

const Drop = styled.div`
  --white: rgba(255, 255, 255, 0.3);

  background: var(--white);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border-left: 1px solid var(--white);
  border-top: 1px solid var(--white);
  box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
  position: absolute;
  transition: all 0.2s ease;

  ${props => {
    switch (props.num) {
      case 1:
        return css`
          height: 80px;
          width: 80px;
          top: -20px;
          left: -40px;
          z-index: -1;
        `;

      case 2:
        return css`
          height: 80px;
          width: 80px;
          bottom: -30px;
          right: -10px;
        `;

      case 3:
        return css`
          height: 100px;
          width: 100px;
          bottom: 120px;
          right: -50px;
          z-index: -1;
        `;
      case 4:
        return css`
          height: 120px;
          width: 120px;
          top: -60px;
          right: -60px;
        `;

      case 5:
        return css`
          height: 60px;
          width: 60px;
          bottom: 170px;
          left: 90px;
          z-index: -1;
        `;

      default:
        break;
    }
  }}
`;

export default Drop;
