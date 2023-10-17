import { FaClipboard } from "react-icons/fa"
import { useForm } from "./useForm"
import { useState } from "react"
import { getRandomChar, getSpecialChar } from "./utils"
import { toast } from "react-hot-toast"

export default function App() {
  const [values, setValues] = useForm({
    length: 6,
    capital: true,
    small: true,
    number: false,
    symbol: false,
  })

  const [result, setResult] = useState("")

  const fieldsArray = [
    {
      field: values.capital,
      getChar: () => getRandomChar(65, 90),
    },
    {
      field: values.small,
      getChar: () => getRandomChar(97, 122),
    },
    {
      field: values.number,
      getChar: () => getRandomChar(48, 57),
    },
    {
      field: values.symbol,
      getChar: () => getSpecialChar(),
    },
  ]

  const handleSubmit = (e: any) => {
    e.preventDefault()
    let generatePassword = ""
    const checkedFields = fieldsArray.filter(({ field }) => field)

    for (let i = 0; i < values.length; i++) {
      const index = Math.floor(Math.random() * checkedFields.length)
      const letter = checkedFields[index]?.getChar()

      if (letter) {
        generatePassword += letter
      }

      if (generatePassword) {
        setResult(generatePassword)
      }
    }
  }

  const handleClipboard = async () => {
    if (result) {
      await navigator.clipboard.writeText(result)
      toast.success("Copied to clipboard")
    }
  }

  return (
    <div className=" flex items-center justify-center w-full h-screen bg-retrowave-bg bg-cover flex-col">
      <div className="flex items-center flex-col mb-48 border-2 rounded-lg p-5">
        <h1 className="text-white font-retro text-5xl">Password Generator</h1>
        <form className="max-w-sm" onSubmit={handleSubmit}>
          <div className="flex items-center" onClick={handleClipboard}>
            <input
              className="p-1 bg-slate-300 outline-none mt-2"
              type="text"
              placeholder="Min 6 Char"
              readOnly
              value={result}
            />
            <FaClipboard
              className="bg-slate-300 border-l-2 border-black cursor-pointer mt-2 "
              size={32}
              color="#3F518F"
            />
          </div>

          <div className="p-3">
            <div className="flex items-end justify-between mt-4">
              <label
                className="text-white text-2xl font-retro"
                htmlFor="length"
              >
                Length
              </label>
              <input
                className="outline-none bg-slate-300 font-bold "
                type="number"
                min={6}
                max={10}
                name="length"
                value={values.length}
                onChange={setValues}
              />
            </div>
            <div className="flex items-center justify-between text-white font-retro text-2xl">
              <label htmlFor="capital">Capital</label>
              <input
                type="checkbox"
                name="capital"
                checked={values.capital}
                onChange={setValues}
              />
            </div>
            <div className="flex items-center justify-between text-white font-retro text-2xl">
              <label htmlFor="small">Small</label>
              <input
                type="checkbox"
                name="small"
                checked={values.small}
                onChange={setValues}
              />
            </div>
            <div className="flex items-center justify-between text-white font-retro text-2xl">
              <label htmlFor="number">Number</label>
              <input
                type="checkbox"
                name="number"
                checked={values.number}
                onChange={setValues}
              />
            </div>
            <div className="flex items-center justify-between text-white font-retro text-2xl">
              <label htmlFor="symbol">Symbol</label>
              <input
                type="checkbox"
                name="symbol"
                checked={values.symbol}
                onChange={setValues}
              />
            </div>
          </div>
          <button className=" w-full text-center bg-slate-300 rounded-md font-bold hover:bg-white ease-in duration-300 p-3">
            Generate
          </button>
        </form>
      </div>
      <h1 className="text-white text-5xl mb-5 font-retro">
        Created by Igor M.R.
      </h1>
    </div>
  )
}
