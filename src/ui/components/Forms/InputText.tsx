interface InputTextProps {
  type: 'text' | 'password';
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}



const InputText: React.FC<InputTextProps> = ({ value, label, onChange, error }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label} className="text-gray-600 font-bold">{label}</label>
      <input
        id={label}
        type="text"
        className={`rounded-lg p-2 border-2 border-gray-200 focus:outline-none focus:border-blue-500
        hover:border-blue-200
        ${error ? 'border-red-500' : ''}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error ? (
        <div className="text-red-500 text-sm">{error}</div>
      ) : null }
    </div>
  )
}

export default InputText