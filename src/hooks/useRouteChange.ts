import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import WebApp from "@twa-dev/sdk";

export default function useRouteChange() {
  const navigate = useNavigate();
  WebApp.BackButton.onClick(() => {
    navigate(-1);
  });

  const { pathname } = useLocation();
  useEffect(() => {
    console.log("pathname=", pathname);
    if (pathname !== "/") {
      WebApp.BackButton.show();
    } else {
      WebApp.BackButton.hide();
    }
  }, [pathname]);
}
