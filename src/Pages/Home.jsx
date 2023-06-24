import Footer from '../Footer';
import HowItWork from '../HowItWork';
import JobPreview from '../JobPreview';
import Jumbotron from '../Jumbotron';
import Navbar from '../Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <HowItWork />
      <JobPreview />
      <Footer />
    </>
  );
};

export default Home;
