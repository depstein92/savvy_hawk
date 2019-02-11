import * as React from 'react';
import Anime from 'react-anime';

interface State{
  openNotif: boolean;
}

interface Props{
  notifications: boolean;
}

export default class Notifications extends React.Component<Props, State>{
  constructor(props: Props){
    super(props)

    this.state = {
      openNotif: this.props.notifications
    }
  }

  static getDerivedStateFromProps(props, state){
    if(state.openNotif !== props.notifications){
      console.log('getDerived', props)
      return {
       openNotif: props.notifications
      };
    };
    return null;
  }

  transitionClose = () => {
    this.setState({
      openNotif: false
    })
  }

  transitionOpen = () => {
   this.setState({
     openNotif: true
   })
  }

  openNotifications = () => {
    return(
      <div className="notifications" ref={"notifications"}>
        <div onClick={this.transitionClose}>
         I am open
        </div>
         <div onClick={this.transitionOpen} className="notification">
           hello
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
         <div onClick={this.transitionOpen} className="notification">
           hello
         </div>
      </div>
    )
  }

  render(){
    console.log('props in NOtifications', this.props.notifications);
    const { openNotif } = this.state;
    console.log('state in notifications', this.state.openNotif)
    return(
      <div>
       { this.props.notifications ? this.openNotifications() : this.closeNotificatons() }
      </div>
    )
  }
}
