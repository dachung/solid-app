import type { Component } from 'solid-js';
import { children, JSX } from 'solid-js';
import Header from './header';

const Layout: Component<{ children: [JSX.Element] }> = props => {
  const c = children(() => props.children);

  return (
    <>
      <Header />

      <main>{c()}</main>
    </>
  );
};
export default Layout;
