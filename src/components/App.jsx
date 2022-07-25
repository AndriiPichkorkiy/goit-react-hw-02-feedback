import React, { Component } from 'react';

import Statistics from './Statistics';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';

import Container from './Container.styled';
import Form from './Form.styled';

import Drops from './Drops';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  sendFeedack = evt => {
    const key = evt.currentTarget.textContent;
    this.setState(preState => ({
      [key]: preState[key] + 1,
    }));
  };

  countTotalFeedback = () => Object.values(this.state).reduce((a, b) => a + b);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;

  render() {
    return (
      <Container>
        <Form>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.sendFeedack}
            />
          </Section>

          <Section title="Statistics">
            <Statistics
              {...this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        </Form>
        {/* decoration part */}
        <Drops />
      </Container>
    );
  }
}
