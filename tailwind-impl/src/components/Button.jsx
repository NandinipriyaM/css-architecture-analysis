export default function Button({ variant = 'primary', size = 'md', disabled, children, onClick, dataTestId, ...props }) {
  const base = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-hover text-white focus:ring-primary',
    secondary: 'bg-secondary text-white hover:brightness-90 focus:ring-secondary',
    danger: 'bg-danger text-white hover:brightness-90 focus:ring-danger',
  }

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={`${base} ${variantClasses[variant]} ${sizeClasses[size]}`}
      disabled={disabled}
      onClick={onClick}
      data-testid={dataTestId || `button-${variant}`}
      {...props}
    >
      {children}
    </button>
  )
}