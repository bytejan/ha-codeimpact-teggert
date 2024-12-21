import TopNav from '../top-nav/top-nav';

export const AppLayout = (props: any) => (
  <div>
    <TopNav />
    <div>{props.children}</div>
  </div>
);

export default AppLayout;
