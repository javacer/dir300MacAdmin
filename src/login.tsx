import * as React from "react"
import * as WinJS from "react-winjs"

export default class Login extends React.Component<void, void> {

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
                    <button className="win-button">
                        Войти
                    </button>
                </div>
            </div>
        )
    }
}
