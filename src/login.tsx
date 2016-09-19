import * as React from "react"
import AppStore from "./api/store"

interface LoginProps extends React.ClassAttributes<Login> {
    store: AppStore
}

export default class Login extends React.Component<LoginProps, void> {

    private onClick = () => {
        this.props.store.isAuthorized = true
    }

    public render() {
        return (
            <div>
                <div>
                    <label>
                        Имя пользователя
                    </label>
                    <br/>
                    <input
                        className="win-textbox"
                        type="text"
                    />
                </div>
                <div>
                    <label>
                        Пароль
                    </label>
                    <br/>
                    <input
                        className="win-textbox"
                        type="password"
                    />
                </div>
                <div>
                    <button
                        className="win-button"
                        onClick={this.onClick}
                    >
                        Войти
                    </button>
                </div>
            </div>
        )
    }
}
