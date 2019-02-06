import * as React from 'react';

export default class Header extends React.Component<{}, {}>{
  constructor(props: {}){
    super(props)
  }

  render(){
    return(
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
            Default
            </span>
          </div>
           <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            />
       </div>
      </div>
    )
  }
}
