import { types, onSnapshot } from "mobx-state-tree";

const Todo = types
  .model("Reports", {
    filters:,
    items:,
  })
  .actions(self => ({
    toggle() {
      self.done = !self.done;
    }
  }));
