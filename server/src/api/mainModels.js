  
// import { Request } from 'express';

export const getResponse = (success, message, data = null) => {
    const response = { success, message, data };
    return response;
  };
  
  export const getErrorResponse = () => {
    const response = { success: false, message: 'Something went wrong', data: null };
    return response;
  };