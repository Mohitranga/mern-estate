// creating our own error from the function
export const errorHandler=(statusCode,message)=>{
    const error=new Error();
    error.statusCode=statusCode;
    error.message=message;
    return error;
}