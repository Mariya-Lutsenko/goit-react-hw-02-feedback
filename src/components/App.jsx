import React, { Component } from 'react';
import css from './App.module.css';
import Statistics from './Statistics/Statistics';

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
  
  onLeaveFeedback=(state)=>{
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
    if (!totalFeedback) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  }

  render() {
    
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div className={css.container}>
        <h2>Please leave feedback</h2>
        <div>
          <button onClick={()=>this.onLeaveFeedback("good")}>Good</button>
          <button onClick={()=>this.onLeaveFeedback("neutral")}>Neutral</button>
          <button onClick={()=>this.onLeaveFeedback("bad")}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <Statistics
        good = {good}
        neutral = {neutral}
        bad = {bad}
        total = {this.countTotalFeedback()}
        positivePercentage = {this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default App;
