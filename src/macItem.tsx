import * as React from "react"


export interface MacData {
    macAdress: string
    userName: string
    isEdit: boolean
}


interface MacItemProps extends React.ClassAttributes<MacItem> {
    macData: MacData
}

export class MacItem extends React.Component<MacItemProps, void> {

    public render() {
        return (
            <div>
                {this.props.macData.macAdress}
            </div>
        )
    }
}
