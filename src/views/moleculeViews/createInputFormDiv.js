import { createDiv } from '../atomViews/createDiv'

export function createInputFormDiv (
  divClassCss,
  labelText,
  inputId,
  placeholderInput,
  inputType = 'text',
  required = true
) {
  const input = document.createElement('input')
  const label = document.createElement('label')
  const div = createDiv(divClassCss)

  label.htmlFor = inputId
  label.textContent = labelText

  input.className = 'modalContainer__input'
  input.required = required
  input.type = inputType
  input.id = inputId
  input.name = inputId
  input.placeholder = placeholderInput

  div.appendChild(label)
  div.appendChild(input)

  return div
}
