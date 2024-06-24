import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import './tailwind.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Provider } from 'react-redux';
import store from './store/store';
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Provider store={store}>
          <Header />
          <main className="main">
            <section className="wrapper">{children}</section>
          </main>
          <ScrollRestoration />
          <Scripts />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
