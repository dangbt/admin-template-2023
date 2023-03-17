import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header className="p-24">
      <div className="bg-primary-500 inline-flex gap-12 py-8 px-24 rounded-18">
        <MagnifyingGlassIcon className="w-24 h-24 text-grey" />
        <input
          className="bg-primary-500 text-14 focus:outline-none"
          placeholder="Search something"
        />
      </div>
    </header>
  );
}
