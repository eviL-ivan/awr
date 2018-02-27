import React from "react";
import Link from "next/link";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class Page extends React.Component {
  componentDidMount() {
    this.props.store.start();
  }

  componentWillUnmount() {
    this.props.store.stop();
  }

  render() {
    return <div>ad</div>;
  }
}

export default Page;
