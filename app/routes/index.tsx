import { Link } from "@remix-run/react";

const Home = () => {
  return (
    <div>
      <Link to="/nivo">Nivo</Link>
      <br />
      <Link to="/tanner">Tanner React-Charts</Link>
    </div>
  );
};

export default Home;
