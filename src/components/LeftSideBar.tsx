import * as React from 'react';

interface State{
  isPopoverVisible: boolean;
  calenderIsActive: boolean;
}


export default class LeftSideBar extends React.Component<{}, {}>{
  constructor(props: {}){
    super(props)

    this.state = {
      isPopoverVisible: false,
      calenderIsActive: false
    }
  }

  openPopOver = () => {
    this.setState({
      isPopoverVisible: true,
    });
  };

  closePopOver = () => {
    this.setState({ isPopoverVisible: false });
  }

  Popover = (
    <div className="left-sidebar__calender-popover">
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
      <div className="left-sidebar">
        {  this.state.isPopoverVisible ? this.Popover : null }
         <div><i className="fas fa-bars"></i></div>
         <div><i className="fas fa-home"></i></div>
           <div
            className="left-sidebar__calender-container"
            onMouseOver={this.openPopOver}
            onMouseOut={this.closePopOver}
            >
            <i className="fa fa-calendar" aria-hidden="true"></i>
           </div>
         <div><i className="fa fa-gavel" aria-hidden="true"></i></div>
         <div><i className="fa fa-user" aria-hidden="true"></i></div>
         <div><i className="fa fa-window-restore" aria-hidden="true"></i></div>
         <div><i className="fa fa-file" aria-hidden="true"></i></div>
         <div><i className="fa fa-envelope" aria-hidden="true"></i></div>
      </div>
    )
  }
}
