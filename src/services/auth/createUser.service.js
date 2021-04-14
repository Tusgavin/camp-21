const { encryptor } = require("../../helpers");
const { usersRepository } = require("../../repositories");

module.exports.createUser = async (name, email, password) => {
   const encryptedPassword = await encryptor.hashPassword(password);
   const newUserParams = {
      name,
      email,
      password: encryptedPassword,
      isAdmin: false
   };

   const user = await usersRepository.create(newUserParams);

   // const payload = {
   //    id: user.id,
   //    email: user.email,
   // };

   // const sign = promisify(jwt.sign);
   // const token = await sign(payload, constants.jwtToken);

   return { message: "User created with success", user };
};
