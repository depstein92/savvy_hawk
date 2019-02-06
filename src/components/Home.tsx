import * as React from 'react';
import Header from './Header';
import LeftSideBar from './LeftSideBar';
import BankAccounts from './BankAccounts';

export default class Home extends React.Component<{}, {}>{
  constructor(props: {}){
    super(props)
  }

  render(){
    return(
      <div>
       <Header />
       <BankAccounts />
       <LeftSideBar />
      </div>
    )
  }
}
