import {Instance, SnapshotOut, types} from "mobx-state-tree"
import {withSetPropAction} from "../helpers/withSetPropAction";
import {AppModel} from "../models/AppModel";

export const AppStoreModel = types
  .model("AppStore")
  .props(AppModel)
  .actions(withSetPropAction)
  .actions((store) => ({
    setIsLoggedIn(loggedIn: boolean) {
      store.setProp("isLoggedIn", loggedIn);
    }
  }))
  .views((store) => ({
  }))

export interface AppStore extends Instance<typeof AppStoreModel> {}
export interface AppStoreSnapshot extends SnapshotOut<typeof AppStoreModel> {}
