import Blogs from "./components/blogs";
import Hero from "./components/hero";
import Newsletter from "./components/Newsletter";
import Projects from "./components/projects";


export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Blogs />
      <Newsletter />
    </>
  ); 
}
