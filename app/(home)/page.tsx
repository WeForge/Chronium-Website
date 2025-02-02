import { Metadata } from 'next';
import Showcase from "../../components/Showcase";
import About from "../../components/About";
import JoinNow from "../../components/JoinNow";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Chronium | Home",
  description: "Welcome To The Homepage Of Chronium! The All In One 100% Free Discord Bot For All Your Needs.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

const Home: React.FC = () => {
  return (
    <>
      <Showcase />
      <About />
      <JoinNow />
      <Footer />
    </>
  );
};

export default Home;
