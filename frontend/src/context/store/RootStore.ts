import SimpleStore from "./SimpleStore";
import {makeAutoObservable} from "mobx";

class RootStore {

    simpleStore: SimpleStore;

    constructor() {
        this.simpleStore = new SimpleStore(this);
        makeAutoObservable(this);
    }

}

export default RootStore;