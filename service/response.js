

function errorResponse(error, errorCode = 4, errorMsg = null) {
    return {
        "error": error,
        "errorCode": errorCode,
        "errorMsg": errorMsg,
    };
}

export { errorResponse };