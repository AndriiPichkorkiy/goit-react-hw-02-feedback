import PropTypes from 'prop-types';
import Button from './Button.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map((key, i) => (
        <Button key={i} onClick={onLeaveFeedback}>
          {key}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

// options={} onLeaveFeedback={}
