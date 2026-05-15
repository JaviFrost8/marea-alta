import { CartaHero } from '../components/carta/CartaHero';
import { Desserts } from '../components/carta/Desserts';
import { MainDishes } from '../components/carta/MainDishes';
import { Starters } from '../components/carta/Starters';
import { Wines } from '../components/carta/Wines';

export default function page() {
  return (
    <>
      <CartaHero />
      <Starters />
      <MainDishes />
      <Desserts />
      <Wines />
    </>
  );
}
