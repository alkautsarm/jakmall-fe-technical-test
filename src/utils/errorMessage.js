export default function errorMessage (messageKey, payload) {
  const messageDictionary = {
    required: 'Field is required',
    email: 'Please input a valid email',
    minLength: `${payload.label} must have at least ${payload.length} letters.`,
    maxLength: `${payload.label} must have at most ${payload.length} letters.`,
    phoneNumberValidator: 'Only 0-9,-,+,(,) char is allowed'
  }

  return messageDictionary[messageKey]
}
