export default function Button({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: "default" | "error";
}) {
  return (
    <button
      className={`rounded-lg px-3 py-1 text-sm font-medium bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white`}
      {...props}
    />
  );
}
