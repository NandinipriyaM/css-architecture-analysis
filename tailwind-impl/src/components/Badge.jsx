export default function Badge({ variant = 'info', size = 'md', children, dataTestId }) {
  const variantClasses = {
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-danger',
    info: 'bg-info',
  }

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold uppercase tracking-wide text-white ${variantClasses[variant]} ${sizeClasses[size]}`}
      data-testid={dataTestId || `badge-${variant}`}
    >
      {children}
    </span>
  )
}