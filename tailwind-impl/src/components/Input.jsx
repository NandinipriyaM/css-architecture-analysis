export default function Input({ label, helperText, error, prefixIcon, suffixIcon, dataTestId = 'input-default', ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium">{label}</label>}
      <div className={`flex items-center border rounded-md overflow-hidden transition-colors ${
        error ? 'border-danger' : 'border-gray-300 dark:border-gray-600'
      }`}>
        {prefixIcon && <span className="px-3 text-lg">{prefixIcon}</span>}
        <input
          className="flex-1 border-none px-3 py-2 bg-transparent outline-none text-gray-900 dark:text-gray-100"
          data-testid={dataTestId}
          {...props}
        />
        {suffixIcon && <span className="px-3 text-lg">{suffixIcon}</span>}
      </div>
      {helperText && !error && <small className="text-gray-500">{helperText}</small>}
      {error && <small className="text-danger">{error}</small>}
    </div>
  )
}