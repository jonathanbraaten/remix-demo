import { Navigation } from './Navigation';
export const Header = () => {
  return (
    <header className="header py-10">
      <section className="wrapper flex justify-between">
        <div>logo</div>
        <Navigation />
      </section>
    </header>
  );
};
