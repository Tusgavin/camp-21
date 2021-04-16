const { StatusCodes } = require("http-status-codes");
const { usersRepository } = require("../../repositories");
const { messages } = require("../../helpers");

module.exports.makeAdmin = async (id) => {
   if (id === undefined) {
      throw {
         status: StatusCodes.UNPROCESSABLE_ENTITY,
         message: messages.missingParams,
      }
   }

   const user = await usersRepository.getById(id);

   if (!user) {
      throw {
         status: StatusCodes.NOT_FOUND,
         message: messages.notFound("user")
      };
   }

   await usersRepository.setFields(user, { isAdmin: true });
   const updatedUser = await usersRepository.update(user);

   return { updatedUser }
};