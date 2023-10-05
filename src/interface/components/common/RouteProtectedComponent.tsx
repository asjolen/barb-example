import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useStores} from "../../../core/store";
import {observer} from "mobx-react-lite";

export const RouteProtectedComponent = observer((props: { children?: any }) => {
  const navigate = useNavigate();
  const { appStore } = useStores();

  useEffect(() => {
    if (!appStore.isLoggedIn) {
      navigate("/login");
    }
  }, [appStore.isLoggedIn, navigate]);

  return props.children;
});
