import { CalculateForm } from 'components/CalculateForm/CalculateForm';
import { useAuth } from 'hooks';
import { BackgroundCalc } from '../components/Background/BackgroundCalc/BackgroundCalc';

export const CalculatorPage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {!isLoggedIn && <BackgroundCalc />}
      <CalculateForm />
    </>
  );
};
