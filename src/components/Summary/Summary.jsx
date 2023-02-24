import { useSelector } from 'react-redux';
import { dayInfo } from 'redux/day-endpoints/selectors';
import { selectDay } from 'redux/day-endpoints/selectors';
import BackgroundSummery from 'components/Background/BackgroundSummery/BackgroundSummery';
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

  const summery = {
    kcalConsumed: kcalConsumed ? Math.round(kcalConsumed) : '000',
    kcalLeft: kcalLeft ? Math.round(kcalLeft) : '000',
    dailyRate: dailyRate ? Math.round(dailyRate) : '000',
    percentsOfDailyRate: percentsOfDailyRate
      ? `${Math.round(percentsOfDailyRate)}%`
      : '000 kcal',
    date,
  };

  return (
    <>
      <BackgroundSummery />
      <h3>{`Summary for ${date}`}</h3>
      <ul>
        <li>Left {summery.kcalLeft} kcal</li>
        <li>Consumed {summery.kcalConsumed} kcal</li>
        <li>Daily rate {summery.dailyRate} kcal</li>
        <li>n% of normal {summery.percentsOfDailyRate}</li>
      </ul>
      <h3>Food not recommended</h3>
      <FoodList />
    </>
  );
};
