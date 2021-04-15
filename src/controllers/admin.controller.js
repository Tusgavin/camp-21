const { StatusCodes } = require("http-status-codes");
const { adminService } = require("../services");
const yup = require("yup");

module.exports = {
   createAdmin: async (req, res) => {
      try {
         const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().required().email(),
            password: yup.string().required(),
         });
   
         await schema.validate(req.body, {
            stripUnknown: true,
         });

         const { name, email, password } = req.body;
         const response = await adminService.createAdmin(name, email, password);

         if (!response) {
            return res.status(StatusCodes.NO_CONTENT).end();
         }

         return res.status(StatusCodes.OK).json(response);
      } catch (error) {
         console.error(error);
         return res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
      }
   },

   makeAdmin: async (req, res) => {
      try {
         const { id } = req.query;

         const response = await adminService.makeAdmin(id);
         
         if (!response) {
            return res.status(StatusCodes.NO_CONTENT).end();
         }

          return res.status(StatusCodes.OK).json(response);
      } catch (error) {
         console.error(error);
         return res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
      }
   }
};