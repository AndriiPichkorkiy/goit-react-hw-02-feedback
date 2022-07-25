import Drop from './Drop.styled.js';

const Drops = () => {
  const count = 5;
  const boxes = [];
  for (let i = 1; i < count + 1; i += 1) {
    boxes.push(<Drop num={i}></Drop>);
  }
  return <>{boxes}</>;
};

export default Drops;
