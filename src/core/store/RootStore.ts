import {Instance, SnapshotOut, types} from "mobx-state-tree"
import {AppStoreModel} from "./stores/AppStore";

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  appStore: types.optional(AppStoreModel, {}),
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
