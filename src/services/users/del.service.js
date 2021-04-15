const { StatusCodes } = require("http-status-codes");
const { usersRepository } = require("../../repositories");
const { encryptor } = require("../../helpers");
const { messages } = require("../../helpers");

module.exports.del = async (password, callingUser) => {   
   const valid = await encryptor.comparePassword(password, callingUser.password);
   if (!valid) {
      throw {
         status: StatusCodes.UNAUTHORIZED,
         message: messages.invalidPassword,
      };
   }

   const deletedUser = await usersRepository.destroy(callingUser.id);

   return { deletedUser };
};
