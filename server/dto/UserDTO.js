module.exports = class UserDTO {
  constructor(user, currentUserId) {
    this.name = user.name
    this.email = user.email
    this.avatar = user.avatar
    this.totalsale = user.totalsale
    if (user._id.toString() === currentUserId) {
      this.balance = user.balance
    }
    this.id = user._id.toString()
  }
}
