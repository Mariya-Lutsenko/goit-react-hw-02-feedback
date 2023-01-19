import React, { Component } from 'react';
import css from './App.module.css';

// 1. Створємо класовий компонент  App, експортуємо його в index.js, рендеримо  розмітку і переконуємося, що вона працює.
// 2. Робимо стилі контейнера для App.module.css і імпортуємо їх в App, вішаємо на div.
// 3. Пишемо логіку, додаємо пропси (у нас не отримує пропсів з верху у Арр)

class App extends Component {
  // 4. Прописуємо state (початкові значення статистики)
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // 6. Створюємо методи для збільшення кількості голосів по натисканню на відповідну кнопку

  // 6.Ця функція не є обробником події, тому записуємо без стрілочної. Розраховуємо загальну кількість голосів і відсоток позитивних голосів.
  // 7. Вставляємо ці функції countTotalFeedback () та  countPositiveFeedbackPercentage() у розмітку.
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  render() {
    // 5. Вствляємо state в розмітку
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.container}>
        <h2>Please leave feedback</h2>
        <div>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
        <h2>Statistics</h2>
        <ul>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()} </li>
        </ul>
      </div>
    );
  }
}

export default App;
