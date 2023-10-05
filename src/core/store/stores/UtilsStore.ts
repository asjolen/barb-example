import {Instance, SnapshotOut, types} from "mobx-state-tree"
import {withSetPropAction} from "../helpers/withSetPropAction";
import {IWebsiteDetailsInterface} from "../../interfaces/IWebsiteDetailsInterface";
import {UtilsModel} from "../models/UtilsModel";

export const UtilsStoreModel = types
  .model("UtilsStore")
  .props(UtilsModel)
  .actions(withSetPropAction)
  .actions((store) => ({
    setWebsiteDetails(details: IWebsiteDetailsInterface) {
      if (!details) {
        return;
      }

      store.setProp("websiteTitle", details.title);
      store.setProp("websiteDescription", details.description);
    }
  }))
  .views((store) => ({
  }))

export interface AppStore extends Instance<typeof UtilsStoreModel> {}
export interface AppStoreSnapshot extends SnapshotOut<typeof UtilsStoreModel> {}
