import AddProduct from 'components/AddProduct/AddProduct';
// import { InformationBlock } from 'components/InformationBlock/InformationBlock';
import Calendar from 'components/Calendar/Calendar';
import ProductList from 'components/ProductList/ProductList';

export const DiaryPage = () => {
  return (
    <>
      <Calendar></Calendar>
      <AddProduct />
      <ProductList />
      {/* <InformationBlock /> */}
    </>
  );
};

export default DiaryPage;
