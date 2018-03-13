import React, { Component } from "react";
import { Provider } from "mobx-react";
import { getSnapshot } from "mobx-state-tree";
import { initStore } from "store/store";

export default InnerComponent => {
  return class ProviderHoc extends Component {
    static getInitialProps({ req }) {
      const isServer = !!req;
      const store = initStore(isServer);
      return { initialState: getSnapshot(store), isServer };
    }

    constructor(props) {
      super(props);
      this.store = initStore(props.isServer, props.initialState);
    }

    render() {
      return (
        <Provider store={this.store}>
          <InnerComponent {...this.props} />
        </Provider>
      );
    }
  };
};
