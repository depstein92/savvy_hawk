import * as React from 'react';
import Header from './Header';
import LeftSideBar from './LeftSideBar';
import BankAccounts from './BankAccounts';
import Notifications from './Notifications';

interface State {
  notifications: boolean;
}

export default class Home extends React.Component<{}, State>{
  constructor(props: {}){
    super(props)

    this.state = {
      notifications: false
    }
  }

  openNotifications = () => {
    this.setState({
      notifications: true
    });
  }

  render(){
    return(
      <div>
       <Header openNotifications={this.openNotifications} />
       <BankAccounts />
       <Notifications notifications={this.state.notifications} />
       <LeftSideBar />
      </div>
    )
  }
}
