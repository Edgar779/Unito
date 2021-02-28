  
class ExtendableError extends Error {

    status
    info
    isOperational
 
   constructor(message, status, info) {
     super(message);
     this.name = this.constructor.name;
     this.message = message;
     this.status = status;
     this.info = info;
     this.isOperational = true;
     Error.captureStackTrace(this);
   }
 }
 
 class APIError extends ExtendableError {
   constructor(message, status = 500, info = null) {
     super(message, status, info);
     if (this.status !== 400 && this.status !== 401 && this.status !== 404) {
       console.error(this);
     }
   }
 }
 export default APIError;