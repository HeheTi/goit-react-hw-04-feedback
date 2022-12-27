import { useState } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from './../Statistics';
import Notifiation from './../../common/Notification/Notifiation';
import { WrapperApp } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onChangeFeedback = option => {
    switch (option) {
      case 'good':
        setGood(s => s + 1);
        break;
      case 'neutral':
        setNeutral(s => s + 1);
        break;
      case 'bad':
        setBad(s => s + 1);
        break;

      default:
        break;
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);
  const options = ['good', 'neutral', 'bad'];
  const isHaveOptions = good === 0 && bad === 0 && neutral === 0;

  return (
    <WrapperApp>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onChangeFeedback} />
      </Section>
      <Section title="Statistics">
        {isHaveOptions ? (
          <Notifiation message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={
              total !== 0 && good !== 0 ? positivePercentage : 0
            }
          />
        )}
      </Section>
    </WrapperApp>
  );
};

export default App;
