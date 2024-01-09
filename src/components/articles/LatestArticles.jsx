
import Carousel from "./Carousel";

const LatestArticles = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div>
        <h2 className=" text-primary text-3xl">Latest Articles</h2>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default LatestArticles;
