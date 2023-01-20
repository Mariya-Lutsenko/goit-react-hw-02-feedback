import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttongroup}>
      {options.map(option => {
        return (
          <button
            className={css.button}
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            <span> {option}</span>
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
