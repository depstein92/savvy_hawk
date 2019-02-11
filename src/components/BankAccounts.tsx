import * as React from 'react';

export default class BankAccounts extends React.Component<{}, {}>{
  constructor(props: {}){
    super(props)
  }

  render(){
    return(
      <section className="bank-accounts">
        <div className="bank-accounts__header">
         <div className="bank-accounts__header--left">
           <span>BANK ACCOUNTS</span>
         </div>
          <div className="bank-accounts__header--right">
            <div>
              <i className="far fa-clock"></i>
              Export transactions
            </div>
            <button
              type="button"
              className="btn btn-sm btn-primary"
              disabled>
             <i className="fa fa-plus"></i>
              New Account
            </button>
          </div>
        </div>
        <div className="bank-accounts__body">
        </div>
      </section>
    )
  }
}
