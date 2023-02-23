import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDaily, fetchDailyRateByUserId } from 'redux/daily-rate/operation';
import { notAllowedProducts } from 'redux/daily-rate/selection';

import { useAuth } from 'hooks/useAuth';

export const FoodList = memo(({ values }) => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useAuth();

  const userLoginedInfo = {
    userId: user.id,
    userData: values,
  };

  useEffect(() => {
    isLoggedIn
      ? dispatch(fetchDailyRateByUserId(userLoginedInfo))
      : dispatch(fetchDaily(values));
    // eslint-disable-next-line
  }, [values]);

  let notAllowedProductsState = useSelector(notAllowedProducts);
  if (isLoggedIn) {
    notAllowedProductsState = user.userData.notAllowedProducts;
  }

  function getRandomElement() {
    return Math.floor(Math.random() * notAllowedProductsState.length - 1);
  }
  const food = [
    notAllowedProductsState[getRandomElement()],
    notAllowedProductsState[getRandomElement()],
    notAllowedProductsState[getRandomElement()],
    notAllowedProductsState[getRandomElement()],
  ];

  return (
    <ol>
      {food.map(item => {
        return <li>{item}</li>;
      })}
    </ol>
  );
});
