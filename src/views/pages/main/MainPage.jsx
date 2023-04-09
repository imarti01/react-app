import { Outlet } from "react-router-dom";
import { HeaderContainer } from "../../components/MainPage";
import { useEffect } from "react";

export const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderContainer />
      <Outlet />
    </>
  );
};
