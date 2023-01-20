import React, { Component } from 'react';
import css from './App.module.css';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

// 1. Створємо класовий компонент  App, експортуємо його в index.js, рендеримо  розмітку і переконуємося, що вона працює.
// 2. Робимо стилі контейнера для App.module.css і імпортуємо їх в App, вішаємо на div.
// 3. Пишемо логіку, додаємо пропси (у нас не отримує пропсів з верху у Арр)
// 4. Прописуємо state (початкові значення статистики)
// 5. Вствляємо state в розмітку
// 6.Ця функція не є обробником події, тому записуємо без стрілочної. Розраховуємо загальну кількість голосів і відсоток позитивних голосів.
// 7. Вставляємо ці функції countTotalFeedback () та  countPositiveFeedbackPercentage() у розмітку.
// 8. Створюємо методи для збільшення кількості голосів по натисканню на відповідну кнопку

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => {
      return { [state]: prevState[state] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return Math.round((good / totalFeedback) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
