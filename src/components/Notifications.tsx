import * as React from 'react';
import Anime from 'react-anime';

interface State{
  openNotif: boolean;
  closeNotif: boolean;
}

interface Props{
  notifications?: boolean;
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

  transitionClose = () => this.setState({ closeNotif: false });

  openNotifications = () => {
    return(
      <div className="notifications" ref={"notifications"}>
        <div className="notifications__heading">
         <div className="notifications__heading--title">
           Notifications
         </div>
         <i
          className="fas fa-window-close"
          onClick={this.transitionClose}></i>
        </div>
        <div>
          <ul className="list-group">
            <li className="list-group-item">
            Cras justo odio
            </li>
            <li className="list-group-item">
            Dapibus ac facilisis in
            </li>
            <li className="list-group-item">
            Morbi leo risus
            </li>
            <li className="list-group-item">
            Porta ac consectetur ac
            </li>
            <li className="list-group-item">
            Vestibulum at eros
            </li>
         </ul>
       </div>
      </div>
    )
  }

  closeNotificatons = () => {
    return(
      <div />
    )
  }

  render(){
    const { openNotif, closeNotif } = this.state;
    return(
      <div>
       { openNotif && closeNotif ? this.openNotifications() : this.closeNotificatons() }
      </div>
    )
  }
}
