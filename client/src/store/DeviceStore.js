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
            {id: 5, name: '12 pro', price: 1000, rating: 5, img: `https://mobilworld.by/upload/iblock/541/5417c37fe39c9d90c22df553400f6159.jpg`},
            {id: 21, name: '12yu', price: 1200, rating: 0, img: `https://mobilworld.by/upload/iblock/541/5417c37fe39c9d90c22df553400f6159.jpg`},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
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

    setSelectedBrand(brand) {
        this._selectedBrand = brand
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
    get selectedBrand(){
        return this._selectedBrand
    }
}