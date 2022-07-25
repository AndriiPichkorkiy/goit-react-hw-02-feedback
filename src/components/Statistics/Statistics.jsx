import PropTypes from 'prop-types';
import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const stats = { good, neutral, bad, total };
  const isAny = Object.values(stats).some(value => value);
  return (
    <>
      {isAny ? (
        <>
          {Object.keys(stats).map((key, i) => (
            <p key={i}>
              {key}: {stats[key]}
            </p>
          ))}
          <p key={stats.length}>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

//<Statistics good={} neutral={} bad={} total={} positivePercentage={}>
