import { types, onSnapshot } from "mobx-state-tree";

const Todo = types
  .model("Report", {
    status: types.string,
    organization: types.string,
    organizationTitle: types.string,
    period: types.string,
    sendData: types.string,
    done: false
  })
  .actions(self => ({
    toggle() {
      self.done = !self.done;
    }
  }));
