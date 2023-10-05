import {types} from "mobx-state-tree";

export const AppModel = {
  isLoggedIn: types.maybe(types.boolean),
};
