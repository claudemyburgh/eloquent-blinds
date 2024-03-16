import React from "react"
import { SelectInput } from "@/Components/Form"

interface Props {
  categories: string
}

const SelectStepCategory = ({ categories, ...resProps }: Props & any) => {
  return (
    <SelectInput {...resProps} className="mt-1 block w-full text-gray-600">
      <option value="">None</option>
      {categories &&
        (categories as unknown as any[]).map((cat) => (
          <option key={cat.uuid} value={cat.id}>
            {cat.title}
          </option>

        ))}
    </SelectInput>
  )
}

export default SelectStepCategory
