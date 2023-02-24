import eroor from '../components/Image/404.jpg';

export const ErrorPage = () => {
  return (
    <>
      <img src={eroor} alt="Page not found" />
      <button>Home</button>
    </>
  );
};
