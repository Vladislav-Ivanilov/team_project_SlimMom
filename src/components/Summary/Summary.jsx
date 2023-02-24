import { useSelector } from 'react-redux';
import { dayInfo } from 'redux/day-endpoints/selectors';
import { selectDay } from 'redux/day-endpoints/selectors';
import { FoodList } from 'components/FoodList/FoodList';

export const Summary = () => {
  const { kcalConsumed, kcalLeft, dailyRate, percentsOfDailyRate } =
    useSelector(dayInfo);
  const day = useSelector(selectDay);

  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  let date = new Date()
    .toLocaleDateString('uk-UA', options)
    .split('.')
    .join('/');

  if (day) {
    date = day.date.split('-').reverse().join('/');
  }

  return (
    <>
      <h3>{`Summary for ${date}`}</h3>
      <ul>
        <li>Left {Math.round(kcalLeft)} kcal</li>
        <li>Consumed {kcalConsumed} kcal</li>
        <li>Daily rate {dailyRate} kcal</li>
        <li>n% of normal {Math.round(percentsOfDailyRate)}%</li>
      </ul>
      <h3>Food not recommended</h3>
      <FoodList />
    </>
  );
};
