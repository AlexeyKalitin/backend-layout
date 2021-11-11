const bcrypt =require('bcryptjs')
const SALT_HASH_KEY = 11;
module.exports.hashPassword = password => bcrypt.hash(password, SALT_HASH_KEY);