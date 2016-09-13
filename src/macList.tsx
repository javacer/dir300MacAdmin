import * as React from "react"
import * as ReactWinJS from "react-winjs"
import * as WinJS from "winjs"
import MacItem from "./macItem"

const tempData = new WinJS.Binding.List([]).dataSource

export default class MacList extends React.Component<void, void> {

    private renderItem(data: any) {
        return (
            <MacItem />
        )
    }

    public render() {
        return (
            <ReactWinJS.ListView
                itemDataSource={tempData}
                itemTemplate={ReactWinJS.reactRenderer(this.renderItem)}
                layout={{type: WinJS.UI.ListLayout}}
            />
        )
    }
}
