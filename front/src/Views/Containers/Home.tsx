import * as React from 'react';
import { connect } from 'react-redux';

interface IStateProps {}

interface IDispatchProps {}

class HomeComponent extends React.Component<IStateProps & IDispatchProps, {}> {
  render() {
    return <div>Hello world</div>;
  }
}

function mapStateToProps(state) {
  return { text: state };
}

/* function mapDispatchToProps(dispatch: Dispatch<IAction>): { actions: ISampleActions } {
  const actions = new SampleActions(SampleApi, dispatch);

  return { actions };
} */

export const Home = connect<IStateProps, IDispatchProps, {}>(mapStateToProps)(HomeComponent);
