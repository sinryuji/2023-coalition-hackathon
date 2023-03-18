import { useState } from 'react'

export default function ParentComponent() {
  const [value, setValue] = useState<string>('')

  return (
    <div>
      {/* <ChildComponent value={value} setValue={setValue} /> */}
    </div>
  )
}