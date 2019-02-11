import * as React from 'react';


interface Props{
  openNotifications?: any;
}

export default class Header extends React.Component<Props, {}>{
  constructor(props: Props){
    super(props)
  }

  openNotifications = () => this.props.openNotifications();

  render(){

    return(
      <div className="heading">
        <div className="heading__legal-practice">
          <strong>Legal</strong>
          <span>Practice</span>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-addon">
          <i className="fa fa-search"></i>
        </span>
         <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
          />
        </div>
       <div className="heading__notifications">
        <div onClick={this.openNotifications}>
          <i className="far fa-bell"></i>
         </div>
        <div>
         <i className="far fa-clock"></i>
         </div>
        <div>
          <i className="far fa-comment-alt"></i>
         </div>
       </div>
      </div>
    )
  }
}
