import { faCaretDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

interface DecreaseIconProps {
  chevornClassName?: string;
  carretClassName?: string;
}

export default function DecreaseIcon({
  chevornClassName,
  carretClassName,
}: DecreaseIconProps) {
  return (
    <div className={classNames("relative w-6 h-6")}>
      <FontAwesomeIcon
        icon={faCaretDown}
        className={classNames(
          "absolute left-1/2 -translate-x-1/2 top-0 h-5",
          carretClassName
        )}
      />
      <FontAwesomeIcon
        icon={faChevronDown}
        className={classNames(
          "absolute left-1/2 -translate-x-1/2 top-2",
          chevornClassName
        )}
      />
    </div>
  );
}
