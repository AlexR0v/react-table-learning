import * as React from "react"

export function ArrowUp(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 11.828l-2.828 2.829-1.415-1.414L12 9l4.243 4.243-1.415 1.414L12 11.828z" />
    </svg>
  )
}

export function ArrowDown(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path fill="none" d="M0 0h24v24H0z"  />
      <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" />
    </svg>
  )
}

