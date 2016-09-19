import * as React from "react"

export default class UserForm extends React.Component<void, void> {

    public render() {
        return (
            <div>
                <label>MAC-адрес</label>
                <br/>
                    <input
                        className="win-textbox"
                        type="text"
                    />
                <br/>
                <label>Flag</label>
                <br/>
                <input
                    className="win-textbox"
                    type="checkbox"
                    checked={true}
                />
                <br/>
                <label>Тип фильтрации</label>
                <br/>
                <select
                />
            </div>
        )
    }
}