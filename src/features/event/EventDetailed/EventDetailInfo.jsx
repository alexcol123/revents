// import React from 'react';
// import { Segment, Grid, Icon, Button } from 'semantic-ui-react';

// const EventDetailInfo = ({event}) => {
//   return (
//     <div>
//       <Segment.Group>
//         <Segment attached="top">
//           <Grid>
//             <Grid.Column width={1}>
//               <Icon size="large" color="teal" name="info" />
//             </Grid.Column>
//             <Grid.Column width={15}>
//               <p> {event.description}</p>
//             </Grid.Column>
//           </Grid>
//         </Segment>
//         <Segment attached>
//           <Grid verticalAlign="middle">
//             <Grid.Column width={1}>
//               <Icon name="calendar" size="large" color="teal" />
//             </Grid.Column>
//             <Grid.Column width={15}>
//               <span>{event.date}</span>
//             </Grid.Column>
//           </Grid>
//         </Segment>
//         <Segment attached>
//           <Grid verticalAlign="middle">
//             <Grid.Column width={1}>
//               <Icon name="marker" size="large" color="teal" />
//             </Grid.Column>
//             <Grid.Column width={11}>
//               <span>{event.venue}</span>
//             </Grid.Column>
//             <Grid.Column width={4}>
//               <Button color="teal" size="tiny" content="Show Map" />
//             </Grid.Column>
//           </Grid>
//         </Segment>
//       </Segment.Group>
//     </div>
//   );
// };

// export default EventDetailInfo;

import React, { useState } from 'react';
import { Segment, Grid, Icon, Button } from 'semantic-ui-react';
import EventDetailedMap from './EventDetailedMap';

const EventDetailedInfo = ({ event }) => {
  const [isMapOpen, showMapToggle] = useState(false);
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{event.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{event.date}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      < attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{event.venue}</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              onClick={() => showMapToggle(!isMapOpen)}
              color="teal"
              size="tiny"
              content={isMapOpen ? 'Hide map' : 'Show map'}
            />
          </Grid.Column>
        </Grid>
      </>
      {isMapOpen && (
        <EventDetailedMap
          lat={event.venueLatLng.lat}
          lng={event.venueLatLng.lng}
        />
      )}
    </Segment.Group>
  );
};

export default EventDetailedInfo;
