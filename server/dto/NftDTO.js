module.exports = class CollectionDTO {
  constructor(nft) {
    this.id = nft._id
    this.name = nft.name
    this.description = nft.description
    this.price = nft.price
    this.collection = nft.collection.toString()
  }
}
