import {types} from "mobx-state-tree";

export const AppModel = {
  isLoggedIn: types.maybe(types.boolean),

  // You may add any properties here
  // that you need to access globally

  // Example:
  // user: types.maybe(types.frozen()),
  // title: types.maybe(types.string),
  // Documentation can be found here: https://mobx-state-tree.js.org/tips/typescript
  // It's also good practice to create a new model for each store, such as
  // UserModel, CompanyModel, etc.
};
