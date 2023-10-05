import {types} from "mobx-state-tree";

export const UtilsModel = {
  websiteTitle: types.maybe(types.string),
  websiteDescription: types.maybe(types.string),
};
