const SUCCESS = {}
const ERROR = {}
exports.SuccessResponse = (response, code, message = null , data) => {
  if (!data) throw new Error('messege required to send to client')
  if (!message) message = 'Success'
  SUCCESS.code = code
  SUCCESS.message = message
  SUCCESS.data = data
  return response.status(SUCCESS.code).send(SUCCESS)
}
exports.ErrorResponse = (response, code, message = null , data = null) => {
  if (!message) message = 'Failure'
  ERROR.code = code
  ERROR.message = message
  return response.status(ERROR.code).send(ERROR)
}
