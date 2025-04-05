import { faCaretUp, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

interface IncreaseIconProps {
  chevornClassName?: string;
  carretClassName?: string;
}

export default function IncreaseIcon({
  chevornClassName,
  carretClassName,
}: IncreaseIconProps) {
  return (
    <div className={classNames("relative w-6 h-6")}>
      <FontAwesomeIcon
        icon={faChevronUp}
        className={classNames(
          "absolute left-1/2 -translate-x-1/2",
          chevornClassName
        )}
      />
      <FontAwesomeIcon
        icon={faCaretUp}
        className={classNames(
          "absolute left-1/2 -translate-x-1/2 top-1 h-5",
          carretClassName
        )}
      />
    </div>
  );
}
