module.exports = function response_schema(errCode, errMsg, output) {
	return {
		response_schema: {
			error_schema: {
				error_code: errCode,
				error_message: errMsg
			},
			output_schema: {
				output
			}
		}
	}
}
