import * as React from 'react';
import Header from './Header';
import LeftSideBar from './LeftSideBar';
import BankAccounts from './BankAccounts';

// interface Props{
//   property?: string
// }
//
// interface State{
//   property?: string
// }

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
