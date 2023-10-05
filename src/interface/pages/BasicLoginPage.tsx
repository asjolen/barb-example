import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {useStores} from "../../core/store";
import {useNavigate} from "react-router-dom";
import {IWebsiteDetailsInterface} from "../../core/interfaces/IWebsiteDetailsInterface";

export const BasicLoginPage = observer(() => {
  const navigate = useNavigate();
  const {appStore, utilsStore} = useStores();

  // State for input values
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const loginUser = () => {
    // Do your own logic here but setting isLoggedIn to true will save the state as true, even after refresh.
    navigate("/");
    appStore.setProp("isLoggedIn", true);
  }

  const setWebsiteDetails = (details: IWebsiteDetailsInterface) => {
    utilsStore.setWebsiteDetails(details);
  }

  const handleSaveDetails = () => {
    // Save the title and description in the store
    setWebsiteDetails({title, description});
  }

  useEffect(() => {
    if (appStore.isLoggedIn) {
      navigate("/");
    }
  }, [appStore]);

  return (
    <div>
      <button onClick={() => loginUser()}>Login</button>

      <br/>

      <hr/>

      <h5>Inputs with state management</h5>

      <label>
        Title:<br />
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </label>

      <br /><br />

      <label>
        Description: <br />

        <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
      </label>

      <br /><br />

      {utilsStore.websiteTitle && utilsStore.websiteDescription && (
        <div>
          <h5>Preview</h5>
          {utilsStore.websiteTitle && <h1>{utilsStore.websiteTitle}</h1>}

          {utilsStore.websiteDescription && <p>{utilsStore.websiteDescription}</p>}
        </div>
      )}

      <button onClick={handleSaveDetails}>Save Details</button>

    </div>
  )
});
