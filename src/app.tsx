import * as React from "react"
import * as ReactDOM  from "react-dom"
import * as ReactWinJS from "react-winjs"
import Login from "./login"
import MacList from "./macList"
import UserForm from "./userForm";

interface ApplicationState {

}

class Application extends React.Component<void, ApplicationState> {

    private renderLoginSection(){
    return (
        <ReactWinJS.Hub.Section
            header="Вход"
            isHeaderStatic={true}
            key="login"
        >
            <Login/>
        </ReactWinJS.Hub.Section>
    )
}

    private renderUserFormSection(){
        return (
            <ReactWinJS.Hub.Section
                header="userForm"
                isHeaderStatic={true}
                key="macForm"
            >
                <UserForm/>
            </ReactWinJS.Hub.Section>
        )
    }

    private renderListMacSection(){
        return (
            <ReactWinJS.Hub.Section
                header="Список мас адресов"
                isHeaderStatic={true}
                key="mac"
            >
                <MacList/>
            </ReactWinJS.Hub.Section>
        )
    }

    public render() {
        return (
            <div>
                <h1 className="win-h1">
                    Администрирование
                </h1>
                <ReactWinJS.Hub>
                    {this.renderLoginSection()}
                    {this.renderUserFormSection()}
                    {this.renderListMacSection()}
                </ReactWinJS.Hub>
            </div>
        )
    }
}

ReactDOM.render(
    React.createElement(Application),
    document.getElementById("application")
)
