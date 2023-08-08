import PropTypes from 'prop-types';
import { Buttons } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Buttons>
      {options.map(option => {
        return (
          <button
            key={option}
            onClick={() => onLeaveFeedback(option)}
            style={{
              textTransform: 'capitalize',
            }}
          >
            {option}
          </button>
        );
      })}
    </Buttons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
