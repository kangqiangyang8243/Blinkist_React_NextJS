import Analysis from "@/components/Analysis";
import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Nav from "@/components/Nav";

import Intro from "@/components/Intro";
import LevelUp from "@/components/LevelUp";
import BiteSize from "@/components/BiteSize";
import Share from "@/components/Share";
import Trials from "@/components/Trials";
import Trust from "@/components/Trust";
import Jobs_choose from "@/components/Jobs_choose";
import Questions from "@/components/Questions";
import Footer from "@/components/Footer";
export default function Home() {




  return (
    <main className="h-screen w-full bg-white overflow-y-auto">
      <Header />
      <Nav />


      <Analysis />

      <Categories />

      <Intro />

      <LevelUp />

      <BiteSize />

      <Share />

      <div className="px-5">  <Trials /></div>

      <Trust />

      <Jobs_choose />



      <Questions title={"Do you have any questions?"} page="H" />

      <Footer />

    </main>
  );
}
