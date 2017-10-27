import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { All, MainText, Divider } from '../styled/Home'
// import BigCalendar from 'react-big-calendar'
// import moment from 'moment'
// import listEvents from '../quickstart'

// BigCalendar.momentLocalizer(moment);

// const MyCalendar = props => (
//   <div>
//     <BigCalendar
//       events={myEventsList}
//       startAccessor='startDate'
//       endAccessor='endDate'
//     />
//   </div>
// );

class Events extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <All>
            <div className='styledBody'>
              <MainText>No Events currently schedule. Check back soon!</MainText>
              <Divider />
              {/* <MyCalendar /> */}
            </div>
        </All>
      </MuiThemeProvider>
    )
  }
}

export default Events
