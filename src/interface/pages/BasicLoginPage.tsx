import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useStores} from "../../core/store";
import {useNavigate} from "react-router-dom";

export const BasicLoginPage = observer(() => {
  const navigate = useNavigate();
  const {appStore} = useStores();

  const loginUser = () => {
    // Do your own logic here but setting isLoggedIn to true will save the state as true, even after refresh.

    navigate("/");
    appStore.setProp("isLoggedIn", true);
  }

  useEffect(() => {
    if(appStore.isLoggedIn) {
      navigate("/");
    }
  }, [appStore]);

  return (
    <div>
      <button onClick={() => loginUser()}>Login</button>
    </div>
  )
});
