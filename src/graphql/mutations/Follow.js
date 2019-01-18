const Follow = require('../../models/Follow')

const createFollow = async (obj, args, context) => {
    if (!context.user) {
      return {
        error: {
          message: 'User not logged in',
        },
      }
    }
    { followrId, followingId, status } = args
    const user = await User.query()
    .insert({followrId, followingId, status })

  if (!follow) {
    throw new Error('Could not add follow')
  }

  return {
    follow,
  }
}

const editFollow = async (obj, args, context) => {
    const { id, status } = args
    if (!context.user) {
      return {
        error: {
          message: 'User not logged in',
        },
      }
    }
    const status = await Follows.query()
    .patch({status: status})
    .followingId(id)
  }

const resolver = { Mutation: { createFollow, editFollow } }

module.exports = resolver