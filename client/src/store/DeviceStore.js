import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor () {
        this._types = [
            {id: 1, name: 'ноутбук'},
            {id: 5, name: 'смартфоны'},
            {id: 8, name: 'смартфон'}

        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'App'}

        ]
        this._devices = [
            {id: 5, name: '12 pro', price: 1000, rating: 0, img: `e026b299-6485-40db-9d59-8904a7f60453.jpg`},
            {id: 21, name: '12yu', price: 1200, rating: 0, img: `ffd8fefb-2eaf-4501-b73f-fb0c2b1e1ba4.jpg`},
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
}