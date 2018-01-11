import * as React from 'react';
import { connect } from 'react-redux';
import { FacetLine } from '../Components';
import { IFacetGroup } from 'src/Models/SingleFacet';

interface IStateProps {}

interface IDispatchProps {}

const facets: IFacetGroup[] = [
  {
    title: 'Type',
    facets: [{ id: '1', name: 'Vins' }, { id: '2', name: 'Alcohol' }, { id: '3', name: 'Beer' }],
  },
  {
    title: 'Region',
    facets: [{ id: '1', name: 'Bordeaux' }, { id: '2', name: 'Bourgogne' }, { id: '3', name: 'Portugal' }, { id: '4', name: 'Italiy' }],
  },
];

class HomeComponent extends React.Component<IStateProps & IDispatchProps, {}> {
  render() {
    return (
      <div>
        <FacetLine facetGroups={facets} />
      </div>
    );
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
