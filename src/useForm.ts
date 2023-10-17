import { useState } from "react"

export function useForm(initialValue: any) {
  const [values, setValues] = useState(initialValue)

  return [
    values,
    (e: any) => {
      setValues({
        ...values,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      })
    },
  ]
}
