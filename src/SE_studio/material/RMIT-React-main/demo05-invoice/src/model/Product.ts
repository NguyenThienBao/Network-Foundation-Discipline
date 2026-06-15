export class Product {
  private _category: string
  private _price   : string
  private _stocked : boolean
  private _name    : string

  constructor(category : string, price : string, stocked : boolean, name : string) {
    this._category = category
    this._price    = price
    this._stocked  = stocked
    this._name     = name
  }

  get Category() : string { return this._category }
  get Price() : string { return this._price }
  get Stocked() : boolean { return this._stocked }
  get Name() : string { return this._name }

  set Category(value: string) { if (value != undefined) this._category = value }
  set Price(value: string) { if (value != undefined) this._price = value }
  set Stocked(value: boolean) { if (value != undefined) this._stocked = value }
  set Name(value: string) { if (value != undefined) this._name = value }
}