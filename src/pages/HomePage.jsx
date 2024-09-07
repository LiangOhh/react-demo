import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobLists from "../components/JobLists";
import ShowAll from "../components/ShowAll";
const HomePage = () => {
  return (
    <>
      <Hero content="Hello World" keyword="Find your way"></Hero>
      <HomeCards></HomeCards>
      <JobLists></JobLists>
      <ShowAll></ShowAll>
    </>
  );
};

export default HomePage;
