import Cards from "../Components/Cards";
import Data from "../Data/data.json";

const Home = () => {
  const DataDate = Data.posts_by_date;

  let result = Object.keys(DataDate).map((key) => key);

  return (
    <div>
      {result &&
        result.map((item) => (
          <>
            {!Cards ? "loading"  :
              <Cards date={item} />}
          </>
        ))}
    </div>
  );
};

export default Home;
