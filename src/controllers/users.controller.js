const { StatusCodes } = require("http-status-codes");
const { messages } = require("../helpers");
const { usersService } = require("../services");

module.exports = {
  list: async (req, res) => {
    try {
      const { name } = req.query;

      const response = await usersService.list({ name });

      if (!response || response.data.length === 0) {
        return res.status(StatusCodes.NO_CONTENT).end();
      }

      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.log(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.messages);
    }
  },

  edit: async (req, res) => {
    try {
      // Checa se name é passado nos parametros
      const { id } = req.query;
      if (id === undefined) {
        return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json(messages.missingParams);
      }

      const { name, email, password } = req.body;

      const response = await usersService.edit(id, { name, email, password });

      if (!response) {
        return res.status(StatusCodes.NO_CONTENT).end();
      }

      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      return res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json(error.message)
    }
  },
};
