module.exports = class CollectionDTO {
  constructor(collection) {
    this.id = collection._id
    this.nft = collection.nft
    this.name = collection.name
    this.bgImg = collection.bgImg
    this.creator = collection.creator.toString()
    this.owner = collection.owner.toString()
  }
}
