

function errorResponse(error, errorCode = 400, errorMsg = null) {
    return {
        "error": error,
        "errorCode": errorCode,
        "errorMsg": errorMsg,
    };
}

function response(success = true, status = 200, msg = null, data = null) {
    return {
        success: success,
        status: status,
        message: msg,
        data: data,
    }
}
export { errorResponse, response };