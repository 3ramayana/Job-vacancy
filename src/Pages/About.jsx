import Footer from '../Footer';
import Navbar from '../Navbar';

const About = () => {
  return (
    <>
      <Navbar />

      <div className="py-16 max-w-screen-xl mx-auto">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12 rounded-xl overflow-hidden">
              <img
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 dark:text-white font-bold md:text-4xl">
                Make a best move to choose your best job
              </h2>
              <p className="mt-6 text-gray-600 dark:text-white">
                If you looking for the perfect job, look no further. Presenting
                DreamJob, your one-stop shop for all your job hunting needs.
                From bespoke recomendations to "job of the day" notifications
                and on to career counseliing, DreamJob has your job search
                covered. As the no. 1 job search website, we built DreamJob to
                work for you while you plan your move to your dream job.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
