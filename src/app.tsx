import * as React from "react"
import * as ReactDOM  from "react-dom"
import * as ReactWinJS from "react-winjs"
import Login from "./login"
import MacList from "./macList"
import {observer} from "mobx-react"
import AppStore from "./api/store.ts"
import MacEdit from "./macEdit";


interface ApplicationProps {
    store: AppStore
}

@observer
class Application extends React.Component<ApplicationProps, void> {


    private onClickAddMacAdress = () => {
        this.props.store.isShowAddMacAdress = true
    }

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
        if (!this.props.store.isShowAddMacAdress) {
            return this.renderMacList()
        } else {
            return this.renderMacEdit()
        }
    }

    private renderMacList() {
        return (
            <ReactWinJS.Hub.Section
                header="Список мас адресов"
                isHeaderStatic={true}
                key="mac"
            >
                <div>
                    <MacList/>
                    <button
                        className="win-button"
                        onClick={this.onClickAddMacAdress}
                    >
                        Добавить MAC адрес
                    </button>
                </div>
            </ReactWinJS.Hub.Section>
        )
    }

    private renderMacEdit() {
        return (
            <ReactWinJS.Hub.Section
                header="Редактирование MAC адреса"
                isHeaderStatic={true}
                key="macEdit"
            >
                <MacEdit
                    store={this.props.store}
                />
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
