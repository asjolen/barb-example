import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {RouteProtectedComponent} from "./interface/components";
import {BasicAuthorizedPage} from "./interface/pages";
import {BasicLoginPage} from "./interface/pages/BasicLoginPage";
import {useInitialRootStore} from "./core/store";

const App = observer(() => {
  const { rehydrated } = useInitialRootStore(() => {
    console.log("App is rehydrated");
  })

  // If not rehydrated, show a loading spinner or placeholder
  if (!rehydrated) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <div className={"page-wrapper"}>
        <Routes>
          <Route path="/login" element={<BasicLoginPage />} />
          <Route path="/" element={<RouteProtectedComponent><BasicAuthorizedPage /></RouteProtectedComponent>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
});

export default App;
