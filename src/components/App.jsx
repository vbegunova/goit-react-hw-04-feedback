import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statisctics from './Statistics';
import Notification from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const addFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const total = good + neutral + bad;
  const positivePercantage = Math.round((good * 100) / total);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={addFeedback} />
      </Section>
      {total !== 0 ? (
        <Section title="Statistics">
          <Statisctics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercantage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};
