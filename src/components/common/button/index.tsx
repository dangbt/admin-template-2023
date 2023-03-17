interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}
export default function Button(props: Props) {
  return (
    <button
      className="bg-secondary-800 border shadow-lg border-secondary-500 font-semibold flex gap-8 py-8 px-16 rounded-18 text-primary-800"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
