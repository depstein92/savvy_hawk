import * as React from "react";
import CalendarLink from './CalendarLink';

interface State {
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
      isMenuExpanded: false,
      isMenuClosed: true
    };
  }

  closeMenu = () => this.setState({ isMenuClosed: false });

  static getDerivedStateFromProps(props: Props, state: State) {
   if(state.isMenuClosed === false){
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
    const { isMenuExpanded, isMenuClosed } = this.state;
    return (
      <div className={isMenuExpanded ? "left-sidebar--expanded" : "left-sidebar"}>
        <div>

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
          <CalendarLink />
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
