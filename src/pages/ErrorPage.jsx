import eroor from '../components/Image/404.jpg';
export const ErrorPage = () => {
  return (
    <>
      {/* <p>Какаето хрень что то придумать надо + картинка </p> */}
      <img src={eroor} alt="Page not found" />
      <button>Home</button>
    </>
  );
};
