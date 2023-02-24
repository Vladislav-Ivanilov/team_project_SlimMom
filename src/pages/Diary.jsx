import { AddProduct } from 'components/AddProduct/AddProduct';
import { ProductList } from 'components/ProductList/ProductList';
import { Calendar } from 'components/Calendar/Calendar';
import { Summary } from 'components/Summary/Summary';

export const DiaryPage = () => {
  return (
    <>
      <Calendar />
      <AddProduct />
      <ProductList />
      <Summary />
    </>
  );
};
