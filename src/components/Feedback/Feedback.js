import React, { Component } from 'react';
import css from '../Feedback/Feedback.module.css';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';

const OPTIONS = ["good", "neutral", "bad"];

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = stateName => {
    console.log(stateName);
    this.setState(prevState => {
      return { [stateName]: prevState[stateName] + 1 };
    });
  };

  countTotalFeedback = () => {
    const totalArr = Object.values(this.state);
    const total = totalArr.reduce((acc, val) => acc + val, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const goodFeed = this.state.good;
    if (!goodFeed) return '0';
    const persent = Math.round((goodFeed * 100) / total);
    return persent;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <ul className={css.buttonWrapper}>
            <FeedbackOptions
              options={OPTIONS}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </ul>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              persent={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification/>
          )}
        </Section>
      </div>
    );
  }
}
