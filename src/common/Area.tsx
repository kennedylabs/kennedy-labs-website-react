import * as React from 'react';
import {
  Nav
} from 'office-ui-fabric-react/Nav';

export class NavByKeysExample extends React.Component<any, any> {
  public render() {
    return (
      <Nav
        groups={ [ { links: [
          { name: 'Home', key: 'Home', url: '' },
          { name: 'Bio', key: 'Activity', url: '' },
          { name: 'Projects', key: 'News', url: '' },
          { name: 'Contacts', key: 'Documents', url: '' },
        ] } ] }
      />
    );
  }
}
