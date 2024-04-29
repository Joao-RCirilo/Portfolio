import Image from "next/image";
import "./styles/home.scss"
import { Header } from "./components/header/header";
import { Experience } from "./components/experience/experience"
import { About } from "./components/about-me/about-me";
import { Education } from "./components/education/education";
import { Languages } from "./components/languages/languages";
import { Works } from "./components/works/works";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <About />
      <Education />
      <Languages />
      <Works />
    </main>
  );
}
