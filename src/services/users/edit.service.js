const { StatusCodes } = require("http-status-codes");
const { usersRepository } = require("../../repositories");
const { messages } = require("../../helpers");

module.exports.edit = async (id, options) => {
   console.log(options);

   Object.keys(options).forEach(key => options[key] === undefined ? delete options[key] : {});

   if (Object.keys(options).length === 0) {
      throw {
         status: StatusCodes.UNPROCESSABLE_ENTITY,
         message: messages.invalidFields,
      };
   }

   const userWithId = await usersRepository.getById(id);

   if (!userWithId) {
      throw {
         status: StatusCodes.NOT_FOUND,
         message: messages.notFound("user"),
      };
   }
   
   await usersRepository.setFields(userWithId, options);
   const updatedUser = await usersRepository.update(userWithId);

   return { updatedUser };
};
