import * as React from 'react';

import { IFacetGroup } from 'src/Models/SingleFacet';

interface IFacetSelectorProps extends IFacetGroup {}

export function FacetSelector({ title, facets }: IFacetSelectorProps) {
  return (
    <div>
      <h3>{title}</h3>
      {facets.map(facet => (
        <div className="custom-control custom-checkbox" key={facet.id}>
          <input type="checkbox" className="custom-control-input" id={title + facet.id} />
          <label className="custom-control-label" htmlFor={title + facet.id}>
            {facet.name}
          </label>
        </div>
      ))}
    </div>
  );
}
