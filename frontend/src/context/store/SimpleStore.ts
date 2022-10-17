import RootStore from "./RootStore";
import {action, makeAutoObservable, observable} from "mobx";

export default class SimpleStore {

    @observable
    public simpleValue: string = "simple value";

    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
    }


    @action
    setSimpleValue(value: string) {
        this.simpleValue = value;
    }

}