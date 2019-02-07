import * as React from 'react';

export default class Header extends React.Component<{}, {}>{
  constructor(props: {}){
    super(props)
  }

  render(){
    return(
      <div className="heading">
        <div className="heading__legal-practice">
          <strong>Legal</strong>
          <span>Practice</span>
        </div>
        <div className="input-group mb-3">
          <div className="input-group">
           <i className="fas fa-search"></i>
           <input
             type="text"
             class="form-control"
             placeholder="Search"
            />
           </div>
       </div>
       <div className="heading__notifications">
        <div>
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
