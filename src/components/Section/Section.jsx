import PropTypes from 'prop-types';
import SectionStyled from './Section';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <h3>{title}</h3>
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Section;
