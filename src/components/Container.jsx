export default function Container({ as: Tag = 'div', className = '', children, ...props }) {
  return (
    <Tag className={`mx-auto w-full max-w-290 px-5 sm:px-6 ${className}`} {...props}>
      {children}
    </Tag>
  )
}
