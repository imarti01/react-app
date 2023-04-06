import { Outlet } from "react-router-dom";
import { HeaderContainer } from "../../components/MainPage";

export const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <Outlet />
    </>
  );
};
