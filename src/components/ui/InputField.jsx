export function InputField({ className, ...props }) {
  return (
    <input
      type={props.type || 'text'}
      className={`w-full rounded-lg border border-border bg-background-secondary py-1.5 pl-4 pr-10 font-medium text-text-primary outline-none ${className}`}
      {...props}
    />
  );
}
