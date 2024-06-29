import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="home">
      <h1>MyMarket</h1>
      <div className="product-list">
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
