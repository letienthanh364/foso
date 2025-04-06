interface SearchIconProps {
  classNames?: string;
}

export default function BellIcon({ classNames }: SearchIconProps) {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
    >
      <g opacity="0.9">
        <path
          d="M5.49999 17.125H10.5C10.8452 17.125 11.125 16.8452 11.125 16.5C11.125 16.1548 10.8452 15.875 10.5 15.875H5.49999C5.15481 15.875 4.87499 16.1548 4.87499 16.5C4.87499 16.8452 5.15481 17.125 5.49999 17.125Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.76562 7.74994V7.12494C1.76562 7.12494 1.76387 5.87851 2.24158 4.72632C2.24158 4.72632 2.71929 3.57412 3.6031 2.69398C3.6031 2.69398 4.48691 1.81384 5.64108 1.34092C5.64108 1.34092 6.79525 0.868006 8.04254 0.874946C8.04254 0.874946 9.3108 0.884553 10.4657 1.39122C10.4657 1.39122 11.5768 1.87868 12.4322 2.75732C12.4322 2.75732 13.2842 3.63253 13.7515 4.76108C13.7515 4.76108 14.2344 5.92722 14.2344 7.19525V7.74994C14.2344 7.74994 14.2344 10.9919 15.2518 12.7493C15.2518 12.7493 15.4194 13.0395 15.4197 13.3738C15.4197 13.3738 15.42 13.7082 15.2533 13.998C15.2533 13.998 15.0866 14.2879 14.7975 14.4558C14.7975 14.4558 14.5084 14.6238 14.1741 14.6249L1.82812 14.6249C1.82812 14.6249 1.49157 14.6238 1.20246 14.4558C1.20246 14.4558 0.913353 14.2879 0.746691 13.998C0.746691 13.998 0.580027 13.7082 0.580323 13.3738C0.580323 13.3738 0.580619 13.0395 0.747796 12.7499C0.747796 12.7499 1.76562 10.9919 1.76562 7.74994ZM3.01562 7.74994C3.01562 7.74994 3.01562 11.3276 1.83032 13.3749L14.1697 13.3749C14.1697 13.3749 12.9844 11.327 12.9844 7.74994V7.19525C12.9844 7.19525 12.9844 5.11646 11.5365 3.62927C11.5365 3.62927 10.0871 2.14047 8.03558 2.12493C8.03558 2.12493 7.03807 2.11938 6.11502 2.49759C6.11502 2.49759 5.19197 2.8758 4.48514 3.5797C4.48514 3.5797 3.77831 4.28359 3.39627 5.20506C3.39627 5.20506 3.01422 6.12653 3.01562 7.12494V7.74994Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
