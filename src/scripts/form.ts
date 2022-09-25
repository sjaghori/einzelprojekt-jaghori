const form = document.querySelector('#form') as HTMLFormElement
const firstName = document.querySelector('#firstname') as HTMLInputElement
const lastName = document.querySelector('#lastname') as HTMLInputElement
const age = document.querySelector('#age') as HTMLInputElement
const email = document.querySelector('#email') as HTMLInputElement
const password = document.querySelector('#password') as HTMLInputElement
const passwordRepeat = document.querySelector(
  '#password-repeat'
) as HTMLInputElement

const firstNameValidation = document.querySelector(
  '#firstname__validation'
) as HTMLSpanElement
const lastNameValidation = document.querySelector(
  '#lastname__validation'
) as HTMLSpanElement
const ageValidation = document.querySelector(
  '#age__validation'
) as HTMLSpanElement
const emailValidation = document.querySelector(
  '#email__validation'
) as HTMLSpanElement
const passwordValidation = document.querySelector(
  '#password__validation'
) as HTMLSpanElement
const passwordRepeatValidation = document.querySelector(
  '#password-repeat__validation'
) as HTMLSpanElement

const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

form.onsubmit = (e) => {
  e.preventDefault()

  if (firstName.value === '') {
    firstNameValidation.hidden = false
    firstNameValidation.innerHTML = 'First name is required'

    return
  }

  if (lastName.value === '') {
    lastNameValidation.hidden = false
    lastNameValidation.innerHTML = 'Last name is required'

    return
  }

  if (!emailReg.test(email.value)) {
    emailValidation.hidden = false
    emailValidation.innerHTML = 'Email is required'

    return
  }

  if (password.value === '') {
    passwordValidation.hidden = false
    passwordValidation.innerHTML = 'Password is required'

    return
  }

  if (passwordRepeat.value === '') {
    passwordRepeatValidation.hidden = false
    passwordRepeatValidation.innerHTML = 'Password repeat is required'

    return
  }

  if (password.value !== passwordRepeat.value) {
    passwordRepeatValidation.hidden = false
    passwordRepeatValidation.innerHTML = 'Password repeat is not the same'

    return
  }

  alert('Form is valid')
}

age.oninput = (e: any) => {
  ageValidation.hidden = true
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (e.target.value > 100) {
    ageValidation.hidden = false
    ageValidation.innerHTML = 'Age must be less than 100'
  } else if (e.target.value < 18) {
    ageValidation.hidden = false
    ageValidation.innerHTML = 'Age must be at least 18'
  } else if (e.target.value === '') {
    ageValidation.hidden = false
    ageValidation.innerHTML = 'Age is required'
  } else {
    ageValidation.hidden = true
  }
}

export default form
