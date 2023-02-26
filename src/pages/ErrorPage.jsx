import error from '../components/Image/404.jpg';

export const ErrorPage = () => {
  return (
    <>
      <img src={error} alt="Page not found" />
      <button>Home</button>
    </>
  );
};
