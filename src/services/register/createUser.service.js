const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { usersRepository } = require("../../repositories");

module.exports.createUser = async (name, email, password) => {
   const userWithEmail = await usersRepository.get({ email });
   if (userWithEmail) {
      throw {
         status: StatusCodes.CONFLICT,
         message: messages.alreadyExists("email"),
      };
   }

   const userWithName = await usersRepository.get({ name });
   if (userWithName) {
      throw {
         status: StatusCodes.CONFLICT,
         message: messages.alreadyExists("name"),
      };
   }

   const newUserParams = {
      name,
      email,
      password,
      isAdmin: false
   };

   const user = await usersRepository.create(newUserParams);

   return { message: "User created with success", user };
};
