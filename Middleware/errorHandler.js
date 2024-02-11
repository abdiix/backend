 const {constants} = require('constants');

const errorHandler = (err, req, res, next) => {
   const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

   switch(statusCode) {
         case constants.VALIDATION_ERROR:
            title : "Validation Error";
            message : err.message;
            stackTrace : err.stack;
            break;
         case constants.NOT_FOUND:
            title : "Not Found";
            message : err.message;
            stackTrace : err.stack;
              break;

        case constants.INTERNAL_SERVER_ERROR:
            title : "Internal Server Error";
            message : err.message;
            stackTrace : err.stack;
            break;

        case constants.BAD_REQUEST:
            title : "Bad Request";
            message : err.message;
            stackTrace : err.stack;
            break;
        case constants.UNAUTHORIZED:
            title : "Unauthorized";
            message : err.message;
            stackTrace : err.stack;
            break;
        case constants.FORBIDDEN:
            title : "Forbidden";
            message : err.message;
            stackTrace : err.stack;
            break;
         default:
              console.log('all good');
              break;
    }
}

module.exports = errorHandler;