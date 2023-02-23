import AddProduct from 'components/AddProduct/AddProduct';
// import { InformationBlock } from 'components/InformationBlock/InformationBlock';
import ProductList from 'components/ProductList/ProductList';
import { Calendar } from 'components/Calendar/Calendar';
import { Summary } from 'components/Summary/Summary';

export const DiaryPage = () => {
  return (
    <>
      <Calendar></Calendar>
      <AddProduct />
      <ProductList />
      <Summary />
      {/* <InformationBlock /> */}
    </>
  );
};
