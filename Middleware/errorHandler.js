const { connn } = require('../constants');

const errorHandler = (err, req, res, next) => {
   const statusCode = res.statusCode ? res.statusCode : 500;
   console.log(statusCode);
   switch(statusCode) {
         case connn.VALIDATION_ERROR:
            res.status(statusCode).json({
                title: "Validation Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
         case connn.NOT_FOUND:
            res.status(statusCode).json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case connn.SERVER_ERROR:
            res.status(statusCode).json({
                title: "Internal Server Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case connn.UNAUTHORIZED:
            res.status(statusCode).json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case connn.FORBIDDEN:
            res.status(statusCode).json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
            break;
         default:
              console.log('all good');
              break;
    }
}

module.exports = errorHandler;
