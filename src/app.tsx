import * as React from "react"
import * as ReactDOM  from "react-dom"
import * as ReactWinJS from "react-winjs"
import Login from "./login"
import MacList from "./macList"
import {observer} from "mobx-react"
import AppStore from "./api/store.ts"


interface ApplicationProps {
    store: AppStore
}

@observer
class Application extends React.Component<ApplicationProps, void> {

    private renderLoginSection() {
        if (this.props.store.isAuthorized) {
            return null
        }
        return (
                <ReactWinJS.Hub.Section
                    header="Вход"
                    isHeaderStatic={true}
                    key="login"
                >
                    <Login
                        store={this.props.store}
                    />
                </ReactWinJS.Hub.Section>
        )
    }

    private renderListMacSection() {
        if (!this.props.store.isAuthorized) {
            return null
        }
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
                    {this.renderListMacSection()}
                </ReactWinJS.Hub>
            </div>
        )
    }
}

ReactDOM.render(
    React.createElement(Application, {store: new AppStore()}),
    document.getElementById("application")
)
