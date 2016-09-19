import * as React from "react"
import * as ReactWinJS from "react-winjs"
import * as WinJS from "winjs"
import {MacItem, MacData} from "./macItem"


const tempData = new WinJS.Binding.List([
    {
        macAdress: "ad:ad:ad:ad:ad:ad",
        userName: "user",
        isEdit: true
    } as MacData

])

interface RenderItem {
    data: MacData
}

export default class MacList extends React.Component<void, void> {

    private renderItem = ReactWinJS.reactRenderer((item: RenderItem) => {
        return (
            <MacItem
               macData={item.data}
            />
        )
    })

    public render() {
        return (
            <ReactWinJS.ListView
                itemDataSource={tempData.dataSource}
                itemTemplate={this.renderItem}
                layout={{type: WinJS.UI.ListLayout}}
            />
        )
    }
}
