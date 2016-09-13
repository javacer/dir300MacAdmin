import * as React from "react"
import * as ReactDOM  from "react-dom"
import * as WinJS from "react-winjs"
import Login from "./login"

interface ApplicationState {

}
class Application extends React.Component<void, ApplicationState> {

    public render() {
        return (
            <div>
                <h1 className="win-h1">
                    Администрирование
                </h1>
                <WinJS.Hub>
                    <WinJS.Hub.Section
                        header="Вход"
                        isHeaderStatic={true}
                        key="login"
                    >
                        <Login/>
                    </WinJS.Hub.Section>
                </WinJS.Hub>
            </div>
        )
    }
}


ReactDOM.render(
    React.createElement(Application),
    document.getElementById("application")
)
