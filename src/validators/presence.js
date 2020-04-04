import { isDefined, isEmpty } from '../utils'

export default function (value, options) {
  if (options.allowEmpty !== false ? !isDefined(value) : isEmpty(value)) {
    return options.message || "can't be blank"
  }
}
