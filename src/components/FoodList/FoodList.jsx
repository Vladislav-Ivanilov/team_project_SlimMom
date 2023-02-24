import { memo } from 'react';
import { useSelector } from 'react-redux';
import { notAllowedProducts } from 'redux/daily-rate/selection';
import { randomProducts } from 'redux/daily-rate/selection';
import { selectAccessProducts } from 'redux/auth/selectors';

import { useAuth } from 'hooks/useAuth';

export const FoodList = memo(() => {
  const { user, isLoggedIn } = useAuth();
  const randomProductsState = useSelector(randomProducts);
  const randomProductsAuthState = useSelector(selectAccessProducts);

  const notAllowedProductsList = isLoggedIn
    ? randomProductsAuthState
    : randomProductsState;

  let notAllowedProductsState = useSelector(notAllowedProducts);
  if (isLoggedIn) {
    notAllowedProductsState = user.userData.notAllowedProducts;
  }

  return (
    <ol>
      {notAllowedProductsList.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ol>
  );
});
