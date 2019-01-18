const User = require('../../../models/User')
const { raw } = require('objection')
const Follows = require('../../../models/Follows')

const userResolver = async (obj, args, context) => {
  const user = await User.query().where('id', '=', args.id)
  return user[0]
}

const usersResolver = async (obj, args, context) => {
  const { substr, hometown, house, concentration, hobbies } = args
  const users = await User
  .query()
  .modify(function(queryBuilder) {
    if (hobbies){
      queryBuilder.whereExists(User.relatedQuery('hobbies').where('hobby', hobbies))
    }
    if (substr){ queryBuilder.where(raw('lower("name")'), 'like', '%' + substr.toLowerCase() + '%')}
    if (hometown){ queryBuilder.where('hometown', '=', hometown)}
    if (house) {queryBuilder.where('house', '=', house)}
    if (concentration) {queryBuilder.where('concentration', '=', concentration)}
  }) 
  return users
}

const followsResolver = async (obj, args, context) => {
    const follows = await Follows.query().where('status', args.status).andWhere(subfollows => {subfollows.where('followingId',args.id).orWhere('followerId',args.id)})
    return follows
  }
const resolver = {
  Query: {
    user: userResolver,
    users: usersResolver,
    follows: followsResolver,
  },
}

module.exports = resolver
