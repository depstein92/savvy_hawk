import * as React from 'react';

interface State{
  isPopoverVisible: boolean;
  isMenuExpanded: boolean;
  isMenuClosed: boolean;
}

interface Props{
  notifications: boolean
}

export default class LeftSideBar extends React.Component<Props, State>{
  constructor(props: {}){
    super(props)

    this.state = {
      isPopoverVisible: false,
      isMenuExpanded: false,
      isMenuClosed: true
    }
  }

  openPopOver = () => this.setState({ isPopoverVisible: true });
  closePopOver = () => this.setState({ isPopoverVisible: false });
  closeMenu = () => this.setState({ isMenuClosed: false });

  Popover = (
    <div onMouseOut={this.closePopOver}
     className="left-sidebar__calender-popover">
        <div>Action</div>
        <div>Another Action</div>
        <div>Something Else here</div>
        <div className="seperate-link">
          <span>Seperate Link</span>
        </div>
    </div>
  );

  static getDerivedStateFromProps(props, state){
    if(props.notifications !== state.isMenuExpanded){
      return {
       isMenuExpanded: props.notifications,
       isMenuClosed: false
     }
   } else if(state.isMenuClosed === false){
       return {
         isMenuExpanded: false
       }
    }
    return null;
  }

  render(){
   const { isMenuExpanded, isPopoverVisible, isMenuClosed } = this.state;
    return(
      <div className={
           "left-sidebar--expanded"
           :
           "left-sidebar"
           }>
        <div>
        { isPopoverVisible ? this.Popover : null }
        {
          isMenuExpanded  ?
            <i
             onClick={this.closeMenu}
             className="fas fa-arrow-left"></i>
            :
            <i className="fas fa-bars"></i>
        }
        </div>
         <div>
          {
            isMenuExpanded ?
               <div>
                 <i className="fas fa-home"></i>
                 <div>Dashboard</div>
               </div>
               :
               <i className="fas fa-home"></i>
          }
         </div>
      {
        isMenuExpanded ?
          <div>
            <i className="fa fa-calendar" aria-hidden="true"></i>
            <div>Schedule</div>
          </div>
            :
           <div className="left-sidebar__calender-container"
            onMouseOver={this.openPopOver}>
              <i className="fa fa-calendar" aria-hidden="true"></i>
           </div>
      }
         <div>
      {
       isMenuExpanded ?
         <div>
           <i className="fa fa-gavel" aria-hidden="true"></i>
          <div>Matters</div>
         </div>
          :
         <i className="fa fa-gavel" aria-hidden="true"></i>
      }
         </div>
         <div>
      {
       isMenuExpanded ?
          <div>
            <i className="fa fa-user" aria-hidden="true"></i>
          <div>Contacts</div>
          </div>
           :
          <i className="fa fa-user" aria-hidden="true"></i>
      }
         </div>
         <div>
      {
        isMenuExpanded ?
          <div>
            <i className="fa fa-window-restore" aria-hidden="true"></i>
            <div>Billing</div>
          </div>
           :
          <i className="fa fa-window-restore" aria-hidden="true"></i>
      }
         </div>
         <div>
      {
       isMenuExpanded ?
         <div>
           <i className="fa fa-file" aria-hidden="true"></i>
           <div>Archives</div>
         </div>
         :
         <i className="fa fa-file" aria-hidden="true"></i>
      }
         </div>
         <div>
      {
        isMenuExpanded ?
           <div>
             <i className="fa fa-envelope" aria-hidden="true"></i>
             <div>Messages</div>
           </div>
            :
           <i className="fa fa-envelope" aria-hidden="true"></i>
      }
         </div>
      </div>
    )
  }
}
