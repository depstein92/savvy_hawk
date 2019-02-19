import * as React from "react";

interface State{
  isPopoverVisible: boolean;
}

export default class CalendarLink extends React.Component<{}, State>{
  constructor(props: {}){
    super(props)

  this.state = { isPopoverVisible: false }
  }

  openPopOver = () => this.setState({ isPopoverVisible: true });
  closePopOver = () => this.setState({ isPopoverVisible: false });

  Popover = (
    <div
      data-test="popover"
      onMouseOut={this.closePopOver}
      className="left-sidebar__calender-popover">
      <div>Action</div>
      <div>Another Action</div>
      <div>Something Else here</div>
      <div className="seperate-link">
        <span>Seperate Link</span>
      </div>
    </div>
  );

  render(){
    return(
        <div data-test="calenderlink-container">
        {this.state.isPopoverVisible ? this.Popover : null}
        <div
          data-test="calenderlink"
          className="left-sidebar__calender-container"
          onMouseOver={this.openPopOver}
        >
          <i className="fa fa-calendar" aria-hidden="true" />
        </div>
        </div>
    )
  }
}
