import React from "react"
import { SelectInput } from "@/Components/Form"

interface Props {
  categories: string
}

const SelectCategory = ({ categories, ...resProps }: Props & any) => {
  return (
    <SelectInput {...resProps} className="mt-1 block w-full text-gray-600">
      <option value="">None</option>
      {categories &&
        (categories as unknown as any[]).map((cat) => (
          <optgroup key={cat.uuid} label={cat.title}>
            {cat.children &&
              (cat.children as unknown as any[]).map((child) => (
                <option key={child.uuid} value={child.id}>
                  {child.title}
                </option>
              ))}
          </optgroup>
        ))}
    </SelectInput>
  )
}

export default SelectCategory
