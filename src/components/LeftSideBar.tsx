import * as React from 'react';

export default class LeftSideBar extends React.Component<{}, {}>{
  constructor(props: {}){
    super(props)

  }

  render(){
    return(
      <div className="left-sidebar">
       <div>
        <i className="fas fa-bars"></i>
       </div>
       <div>
        <i className="fas fa-home"></i>
       </div>
       <div>
       <i className="fa fa-calendar" aria-hidden="true"></i>
       </div>
       <div>
        <i className="fa fa-gavel" aria-hidden="true"></i>
       </div>
       <div>
        <i className="fa fa-user" aria-hidden="true"></i>
       </div>
       <div>
       <i className="fa fa-window-restore" aria-hidden="true"></i>
       </div>
        <div>
        <i className="fa fa-file" aria-hidden="true"></i>
        </div>
        <div>
         <i className="fa fa-envelope" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}
