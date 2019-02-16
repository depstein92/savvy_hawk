import * as React from "react";

interface State {
  isPopoverVisible: boolean;
  isMenuExpanded: boolean;
  isMenuClosed: boolean;
}

interface Props {
  notifications: boolean;
}

export default class LeftSideBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isPopoverVisible: false,
      isMenuExpanded: false,
      isMenuClosed: true
    };
  }

  openPopOver = () => this.setState({ isPopoverVisible: true });
  closePopOver = () => this.setState({ isPopoverVisible: false });
  closeMenu = () => this.setState({ isMenuClosed: false });

  Popover = (
    <div
      onMouseOut={this.closePopOver}
      className="left-sidebar__calender-popover">
      <div>Action</div>
      <div>Another Action</div>
      <div>Something Else here</div>
      <div className="seperate-link">
        <span>Seperate Link</span>
      </div>
    </div>
  );

  static getDerivedStateFromProps(props: Props, state: State) {
    if(state.isPopoverVisible){
        return {
          isMenuClosed: true,
          isMenuExpanded: false
        };
    } else if(state.isMenuClosed === false){
      console.log('I have been triggered');
        return {
          isMenuExpanded: false,
          isMenuClosed: true
        };
    } else if(props.notifications !== state.isMenuExpanded){
        return {
          isMenuExpanded: props.notifications,
          isMenuClosed: false
        };
    }
    return null;
  }

  render() {
    const { isMenuExpanded, isPopoverVisible, isMenuClosed } = this.state;
    console.log('isMenuExpanded', isMenuExpanded);
    console.log('isPopoverVisible', isPopoverVisible);
    console.log('isMenuClosed', isMenuClosed);
    console.log('------------------------------------')
    return (
      <div className={isMenuExpanded ? "left-sidebar--expanded" : "left-sidebar"}>
        <div>
          {isPopoverVisible ? this.Popover : null}
          {isMenuExpanded ? (
            <i onClick={this.closeMenu} className="fas fa-arrow-left" />
          ) : (
            <i className="fas fa-bars" />
          )}
        </div>
        <div>
          {isMenuExpanded ? (
            <div>
              <i className="fas fa-home" />
              <div>Dashboard</div>
            </div>
          ) : (
            <i className="fas fa-home" />
          )}
        </div>
        {isMenuExpanded ? (
          <div>
            <i className="fa fa-calendar" aria-hidden="true" />
            <div>Schedule</div>
          </div>
        ) : (
          <div
            className="left-sidebar__calender-container"
            onMouseOver={this.openPopOver}
          >
            <i className="fa fa-calendar" aria-hidden="true" />
          </div>
        )}
        <div>
          {isMenuExpanded ? (
            <div>
              <i className="fa fa-gavel" aria-hidden="true" />
              <div>Matters</div>
            </div>
          ) : (
            <i className="fa fa-gavel" aria-hidden="true" />
          )}
        </div>
        <div>
          {isMenuExpanded ? (
            <div>
              <i className="fa fa-user" aria-hidden="true" />
              <div>Contacts</div>
            </div>
          ) : (
            <i className="fa fa-user" aria-hidden="true" />
          )}
        </div>
        <div>
          {isMenuExpanded ? (
            <div>
              <i className="fa fa-window-restore" aria-hidden="true" />
              <div>Billing</div>
            </div>
          ) : (
            <i className="fa fa-window-restore" aria-hidden="true" />
          )}
        </div>
        <div>
          {isMenuExpanded ? (
            <div>
              <i className="fa fa-file" aria-hidden="true" />
              <div>Archives</div>
            </div>
          ) : (
            <i className="fa fa-file" aria-hidden="true" />
          )}
        </div>
        <div>
          {isMenuExpanded ? (
            <div>
              <i className="fa fa-envelope" aria-hidden="true" />
              <div>Messages</div>
            </div>
          ) : (
            <i className="fa fa-envelope" aria-hidden="true" />
          )}
        </div>
      </div>
    );
  }
}
