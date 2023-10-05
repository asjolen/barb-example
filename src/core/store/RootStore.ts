import {Instance, SnapshotOut, types} from "mobx-state-tree"
import {AppStoreModel} from "./stores/AppStore";
import {UtilsStoreModel} from "./stores/UtilsStore";

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  appStore: types.optional(AppStoreModel, {}),
  utilsStore: types.optional(UtilsStoreModel, {}),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {
}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {
}
