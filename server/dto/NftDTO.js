module.exports = class NftDTO {
  constructor(nft) {
    this.id = nft._id
    this.name = nft.name
    this.description = nft.description
    this.price = nft.price
    this.imgUrl = nft.imgUrl
    this.collection = nft.collectionNft.toString()
    this.creator = nft.creator.toString()
    this.owner = nft.owner.toString()
  }
}
