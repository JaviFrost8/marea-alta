import { Dishes } from './components/Home/Dishes';
import { Hero } from './components/Home/Hero';
import { Philosophy } from './components/Home/Philosophy';
import { TheScenery } from './components/Home/TheScenery';

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <TheScenery />
      <Dishes />
    </>
  );
}
