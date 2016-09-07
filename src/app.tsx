import * as React from "react"
import * as ReactDOM  from "react-dom"
import * as ReactWinJS from "react-winjs"

interface ApplicationState{

}
class Application extends React.Component<void, ApplicationState>{

    public render(){
        return (
            <div>
                <h1 className="win-h1">
                    Администрирование
                </h1>
            </div>
        )
    }
}


ReactDOM.render(
    React.createElement(Application),
    document.getElementById('application')
)