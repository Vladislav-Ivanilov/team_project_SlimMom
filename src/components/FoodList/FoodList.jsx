import { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDaily, fetchDailyRateByUserId } from 'redux/daily-rate/operation';
import { notAllowedProducts } from 'redux/daily-rate/selection';

import { useAuth } from 'hooks/useAuth';

export const FoodList = memo(({ values }) => {
  const dispatch = useDispatch();
  const notAllowedProductsState = useSelector(notAllowedProducts);
  const { user } = useAuth();

  const userLoginedInfo = {
    userId: user.id,
    userData: values,
  };

  function getRandomElement() {
    return Math.floor(Math.random() * notAllowedProductsState.length - 1);
  }

  const food = [
    notAllowedProductsState[getRandomElement()],
    notAllowedProductsState[getRandomElement()],
    notAllowedProductsState[getRandomElement()],
    notAllowedProductsState[getRandomElement()],
  ];

  useEffect(() => {
    'id' in user
      ? dispatch(fetchDailyRateByUserId(userLoginedInfo))
      : dispatch(fetchDaily(values));
  }, [values]);

  return (
    <ol>
      {food.map(item => {
        return <li>{item}</li>;
      })}
    </ol>
  );
});
