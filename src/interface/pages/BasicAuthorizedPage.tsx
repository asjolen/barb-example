import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useStores} from "../../core/store";

export const BasicAuthorizedPage = observer(() => {
  const {appStore} = useStores();

  return (
    <div>
      Hello World

      <button onClick={() => appStore.setIsLoggedIn(false)}>Sign out :)</button>
    </div>
  )
});
