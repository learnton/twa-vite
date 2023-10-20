export default function Page() {
  return (
    <div className="max-w-none prose prose-sm prose-invert">
      <h1 className="font-bold text-xl">theme-config</h1>

      <ul>
        <li>
          A layout is UI that is shared between multiple pages. On navigation,
          layouts preserve state, remain interactive, and do not re-render. Two
          or more layouts can also be nested.
        </li>
        <li>Try navigating between categories and sub categories.</li>
      </ul>
    </div>
  );
}
