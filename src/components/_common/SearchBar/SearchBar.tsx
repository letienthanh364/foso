import { InputHTMLAttributes, useCallback, useEffect, useState } from "react";
import { SearchIcon } from "src/assets/icons";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch: (value: string | undefined) => void;
}

export default function SearchBar({ onSearch, ...rest }: SearchBarProps) {
  const [keywords, setKeywords] = useState<string>();
  const { value } = rest;

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onSearch(keywords);
      }
    },
    [onSearch, keywords]
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      if (value === undefined) {
        return;
      }
      onSearch(keywords);
    }, 1000);

    return () => clearTimeout(handler);
  }, [keywords, onSearch, value]);

  return (
    <div className="bg-white/20 rounded-lg p-2 gap-2 flex items-center">
      <SearchIcon classNames="font-medium" />
      <input
        type="text"
        className="bg-transparent border-none outline-none !font-normal"
        onChange={(e) => setKeywords(e.target.value)}
        {...rest}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
