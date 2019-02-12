import * as React from 'react';
import { Popover, OverlayTrigger, ListGroup } from 'react-bootstrap';

export default class LeftSideBar extends React.Component<{}, {}>{
  constructor(props: {}){
    super(props)
  }

  Popover = (
    <div id="popover-basic"   style={{
      backgroundColor: 'white',
      padding: '2px',
      color: 'black',
      borderRadius: 3,
      padding: '10px',
      border: '1px solid grey'
    }}>
      <div>Action</div>
      <div>Another Action</div>
      <div>Something Else here</div>
      <ListGroup variant="flush">
        <ListGroup.Item>
          Seperate Link
        </ListGroup.Item>
      </ListGroup>
    </div>
  );

  render(){
    return(
      <div className="left-sidebar">
         <div><i className="fas fa-bars"></i></div>
         <div><i className="fas fa-home"></i></div>
         <OverlayTrigger
           trigger="hover"
           placement="right-start"
           overlay={this.Popover}>
           <div>
            <i className="fa fa-calendar" aria-hidden="true"></i>
           </div>
         </OverlayTrigger>
         <div><i className="fa fa-gavel" aria-hidden="true"></i></div>
         <div><i className="fa fa-user" aria-hidden="true"></i></div>
         <div><i className="fa fa-window-restore" aria-hidden="true"></i></div>
         <div><i className="fa fa-file" aria-hidden="true"></i></div>
         <div><i className="fa fa-envelope" aria-hidden="true"></i></div>
      </div>
    )
  }
}
