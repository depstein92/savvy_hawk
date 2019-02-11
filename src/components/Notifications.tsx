import * as React from 'react';
import Anime from 'react-anime';

interface State{
  openNotif: boolean;
  closeNotif: boolean;
}

interface Props{
  notifications: boolean;
}

export default class Notifications extends React.Component<Props, State>{
  constructor(props: Props){
    super(props)

    this.state = {
      openNotif: this.props.notifications,
      closeNotif: false
    }
  }

  static getDerivedStateFromProps(props, state){
    if(props.notifications !== state.openNotif){
      return {
       openNotif: props.notifications,
       closeNotif: true
     }
   } else if(state.closeNotif === false){
     return {
       openNotif: false
     }
   }
  }


  transitionClose = () => {
   this.setState({
     closeNotif: false
   });
  }

  openNotifications = () => {
    return(
      <div className="notifications" ref={"notifications"}>
        <div onClick={this.transitionClose}>
         Exit
        </div>
      </div>
    )
  }

  closeNotificatons = () => {
    return(
      <div>
        <div onClick={this.transitionClose}>
         I am closed
        </div>
      </div>
    )
  }

  render(){
    const { openNotif, closeNotif } = this.state;
    console.log('openNotif', this.state.openNotif);
    console.log('closeNotif', this.state.closeNotif);
    return(
      <div>
       { openNotif && closeNotif ? this.openNotifications() : this.closeNotificatons() }
      </div>
    )
  }
}
