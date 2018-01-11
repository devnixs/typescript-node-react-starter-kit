import * as React from 'react';
import { IFacetGroup } from 'src/Models/SingleFacet';

import { FacetSelector } from './FacetSelector';

interface IFacetLineProps {
  facetGroups: IFacetGroup[];
}

export function FacetLine({ facetGroups }: IFacetLineProps) {
  return (
    <div className="row">
      {facetGroups.map(facet => (
        <div className="col" key={facet.title}>
          <FacetSelector {...facet} />
        </div>
      ))}
    </div>
  );
}
