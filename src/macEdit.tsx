import * as React from "react"
import AppStore from "./api/store"

interface MacEditProps {
    store: AppStore
}

export default class MacEdit extends React.Component<MacEditProps, void> {

    private onClickSaveButton = () => {
        this.props.store.isShowAddMacAdress = false
    }

    public render() {
        return (
            <div>
                <label
                    className="win-label"
                >
                    MAC-адрес
                </label>
                <br/>
                <input
                    className="win-textbox"
                    type="text"
                />
                <br/>
                <input
                    className="win-checkbox"
                    type="checkbox"
                />
                <label
                    className="win-label"
                >
                    Flag
                </label>
                <br/>
                <label
                    className="win-label"
                >
                    Тип фильтрации
                </label>
                <br/>
                <select
                    className="win-dropdown"
                />
                <br/>
                <button
                    className="win-button"
                    onClick={this.onClickSaveButton}
                >
                    Сохранить
                </button>
            </div>
        )
    }
}