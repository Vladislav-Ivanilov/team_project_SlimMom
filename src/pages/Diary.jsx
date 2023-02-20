import { AddProduct } from 'components/AddProduct/AddProduct';
import { InformationBlock } from 'components/InformationBlock/InformationBlock';
import { ProductList } from 'components/ProductList/ProductList';

export const DiaryPage = () => {
  return (
    <>
      <div>тут будет календарь</div>
      <AddProduct />
      <ProductList />
      <InformationBlock />
    </>
  );
};
