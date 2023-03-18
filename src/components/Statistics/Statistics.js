import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, persent }) => {
  return (
    <ul>
      <li className={css.info}>
        Good:<span className={css.value}>{good}</span>
      </li>
      <li className={css.info}>
        Neutral:<span className={css.value}>{neutral}</span>
      </li>
      <li className={css.info}>
        Bad:<span className={css.value}>{bad}</span>
      </li>
      <li className={css.info}>
        Total:<span className={css.value}>{total}</span>
      </li>
      {persent > 0 ? (
        <li className={css.info}>
          Positive feedback:<span className={css.value}> {persent}% </span>
        </li>
      ) : (
        <li className={css.info}>No positive feedback yet</li>
      )}
    </ul>
  );
};
