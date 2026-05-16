export default function Card({ header, children, footer, hoverable, dataTestId = 'card-default' }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden w-72 ${
        hoverable ? 'hover:shadow-lg transition-shadow' : ''
      }`}
      data-testid={dataTestId}
    >
      {header && <div className="p-4 border-b border-gray-200 dark:border-gray-700 font-semibold">{header}</div>}
      <div className="p-4">{children}</div>
      {footer && <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">{footer}</div>}
    </div>
  )
}