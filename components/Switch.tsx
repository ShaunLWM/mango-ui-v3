import { FunctionComponent } from 'react'

interface SwitchProps {
  checked: boolean
  onChange: (x) => void
}

const Switch: FunctionComponent<SwitchProps> = ({
  checked = false,
  children,
  onChange,
}) => {
  const handleClick = () => {
    onChange(!checked)
  }

  return (
    <div className="flex items-center">
      <span className="mr-1">
        <span className="">{children}</span>
      </span>
      <button
        type="button"
        className={`${
          checked ? 'bg-th-primary' : 'bg-th-fgd-4'
        } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent 
        rounded-full cursor-pointer transition-colors ease-in-out duration-200 
        focus:outline-none`}
        role="switch"
        aria-checked={checked}
        onClick={handleClick}
      >
        <span className="sr-only">{children}</span>
        <span
          aria-hidden="true"
          className={`${
            checked ? 'translate-x-5' : 'translate-x-0'
          } pointer-events-none inline-block h-5 w-5 rounded-full bg-white 
          shadow transform ring-0 transition ease-in-out duration-200`}
        ></span>
      </button>
    </div>
  )
}

export default Switch