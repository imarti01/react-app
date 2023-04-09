import { useEffect } from "react";
import { ContainerDetailPage } from "../../components/DetailPage/ContainerDetailPage/ContainerDetailPage";

export const DetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ContainerDetailPage />
    </>
  );
};
