import {observable, action} from "mobx"

export default class AppStore {
    @observable
    private _isAuthorized: boolean = false

    @action
    private setIsAuthorized(value: boolean) {
        this._isAuthorized = value
    }

    set isAuthorized(value){
        this.setIsAuthorized(value)
    }

    get isAuthorized(){
        return this._isAuthorized
    }
}
