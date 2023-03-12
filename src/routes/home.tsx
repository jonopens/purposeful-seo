import { Outlet } from "react-router-dom";
import TopNav from '../components/top-nav';

export default function Home() {
  return (
    <div>
      <TopNav />
      <h1>Purposeful SEO Home</h1>
      <Outlet />
    </div>
  );
};