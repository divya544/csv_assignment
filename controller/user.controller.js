const userService = require("../service/user.service");
const message = require("../utills/message");
// const responseHandler = require("../responseHandler/responseHandler");
const {
  SuccessResponse,
  ErrorResponse,
} = require("../utills/response");

class UserController {
  static uploadCsv = async (req, res) => {
    try {
    const file=req.file;
    if(!file){
      throw Error(message.fileDoesNotExist)
    }
    const buffer = Buffer.from(file.buffer);
      const {responseMessage,responseData} = await userService.uploadCsv(buffer);
      return SuccessResponse(
        res,
        200,
        responseMessage,
        responseData
      );
    } catch (error) {
      return ErrorResponse(res, 500, error.message);
    }
  };
  static getUserDetail = async (req, res) => {
    try {
    const {email}=req.query;
    var validRegex = /\S+@\S+\.\S+/;
    if (!email){
        throw new Error(message.emailRequired);
     }
    if (!email || !email.match(validRegex)){
       throw new Error(message.inValidMail);
    }
    const data =await userService.getUserDetail(email)
      return SuccessResponse(
        res,
        200,
         message.success,
         data
      );
    } catch (error) {
      return ErrorResponse(res, 500, error.message);
    }
  };



  getUserDetail
}
module.exports = UserController;
