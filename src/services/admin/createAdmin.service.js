const { StatusCodes } = require("http-status-codes");
const { messages } = require("../../helpers");
const { usersRepository } = require("../../repositories");

module.exports.createAdmin = async (name, email, password) => {
   const userWithEmail = await usersRepository.get({ email });
   if (userWithEmail) {
      throw {
         status: StatusCodes.CONFLICT,
         messgae: messages.alreadyExists("email")
      }
   }

   const userWithName = await usersRepository.get({ name });
   if (userWithName) {
      throw {
         status: StatusCodes.CONFLICT,
         message: messages.alreadyExists("name"),
      };
   }

   const newAdminParams = {
      name,
      email,
      password,
      isAdmin: true
   };

   const user = await usersRepository.create(newAdminParams);

   return { message: "User Admin created with success", user };
};