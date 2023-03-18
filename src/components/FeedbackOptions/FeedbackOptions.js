import PropTypes from 'prop-types';

import css from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <li key={option}>
            <button className={css.button} type="button" name={option}
              onClick={() => {onLeaveFeedback(option);}}
            >{option}</button>
          </li>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
};