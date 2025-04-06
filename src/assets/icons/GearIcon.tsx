interface SearchIconProps {
  classNames?: string;
}

export default function GearIcon({ classNames }: SearchIconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
    >
      <g opacity="0.9">
        <g opacity="0.9">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 5.625C10 5.625 11.8122 5.625 13.0936 6.90641C13.0936 6.90641 14.375 8.18782 14.375 10C14.375 10 14.375 11.8122 13.0936 13.0936C13.0936 13.0936 11.8122 14.375 10 14.375C10 14.375 8.18785 14.375 6.90644 13.0936C6.90644 13.0936 5.62503 11.8122 5.62503 10C5.62503 10 5.62503 8.18781 6.90644 6.90641C6.90644 6.90641 8.18785 5.625 10 5.625ZM10 6.875C10 6.875 8.70561 6.875 7.79032 7.79029C7.79032 7.79029 6.87503 8.70558 6.87503 10C6.87503 10 6.87503 11.2944 7.79032 12.2097C7.79032 12.2097 8.70561 13.125 10 13.125C10 13.125 11.2944 13.125 12.2097 12.2097C12.2097 12.2097 13.125 11.2944 13.125 10C13.125 10 13.125 8.70558 12.2097 7.79029C12.2097 7.79029 11.2944 6.875 10 6.875Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.6656 2.86471L14.9393 4.78086C14.9393 4.78086 15.0829 4.9189 15.2193 5.06067L17.1353 5.33438C17.3255 5.36155 17.4926 5.47471 17.5885 5.64122C17.5885 5.64122 18.1525 6.62079 18.4472 7.71208C18.4973 7.89789 18.4591 8.09645 18.3435 8.25034L17.1795 9.79998C17.1795 9.79998 17.1858 10.0273 17.1821 10.2034L18.3435 11.7496C18.4589 11.9033 18.4972 12.1015 18.4474 12.2871C18.4474 12.2871 18.1539 13.3797 17.5881 14.3594C17.4922 14.5256 17.3252 14.6384 17.1353 14.6656L15.2147 14.9399C15.2147 14.9399 15.06 15.0988 14.9397 15.2167L14.6656 17.1352C14.6384 17.3254 14.5253 17.4926 14.3588 17.5885C14.3588 17.5885 13.3792 18.1525 12.2879 18.4471C12.1021 18.4973 11.9035 18.459 11.7496 18.3435L10.2077 17.1853C10.2077 17.1853 10 17.1937 9.79229 17.1853L8.25037 18.3435C8.0967 18.4589 7.89849 18.4972 7.71288 18.4473C7.71288 18.4473 6.62027 18.1539 5.64057 17.5881C5.47442 17.4921 5.36155 17.3252 5.33441 17.1352L5.06019 15.2157C5.06019 15.2157 4.92045 15.0795 4.7843 14.9398L2.86474 14.6656C2.67453 14.6384 2.50738 14.5252 2.4115 14.3587C2.4115 14.3587 1.84746 13.3792 1.55286 12.2879C1.50269 12.1021 1.54094 11.9035 1.65653 11.7496L2.82051 10.2C2.82051 10.2 2.81418 9.97262 2.81795 9.79657L1.65653 8.25034C1.54111 8.09667 1.5028 7.89845 1.55265 7.71285C1.55265 7.71285 1.84612 6.62024 2.4119 5.64053C2.50785 5.47439 2.6748 5.36151 2.86474 5.33438L4.7843 5.06016C4.7843 5.06016 4.92044 4.92041 5.06019 4.78427L5.33441 2.86471C5.36158 2.6745 5.47474 2.50735 5.64125 2.41147C5.64125 2.41147 6.62082 1.84743 7.71211 1.55282C7.89792 1.50266 8.09648 1.54091 8.25037 1.6565L9.79229 2.81468C9.79229 2.81468 10 2.80627 10.2077 2.81468L11.7496 1.6565C11.9033 1.54108 12.1015 1.50277 12.2871 1.55262C12.2871 1.55262 13.3797 1.84608 14.3594 2.41187C14.5256 2.50782 14.6385 2.67477 14.6656 2.86471ZM13.7328 5.1743L13.4722 3.34991C13.4722 3.34991 12.8845 3.04132 12.2508 2.84341L10.7738 3.95283C10.6504 4.04551 10.4971 4.08926 10.3434 4.07567C10.3434 4.07567 10 4.04531 9.65662 4.07567C9.5029 4.08926 9.34959 4.04551 9.22621 3.95283L7.74956 2.84367C7.74956 2.84367 7.11593 3.04222 6.52773 3.35034L6.26716 5.1743C6.2472 5.31406 6.1805 5.44294 6.07794 5.53995C6.07794 5.53995 5.80149 5.80146 5.53999 6.07791C5.44297 6.18047 5.31409 6.24717 5.17433 6.26713L3.34994 6.52776C3.34994 6.52776 3.04135 7.11552 2.84344 7.74918L3.95286 9.22618C4.04551 9.34953 4.08927 9.50279 4.07571 9.65647C4.07571 9.65647 4.05591 9.88091 4.07752 10.3709C4.08391 10.5156 4.03984 10.658 3.95286 10.7738L2.8437 12.2504C2.8437 12.2504 3.04225 12.884 3.35037 13.4722L5.17433 13.7328C5.31409 13.7528 5.44297 13.8195 5.53998 13.922C5.53998 13.922 5.8015 14.1985 6.07794 14.46C6.1805 14.557 6.2472 14.6859 6.26716 14.8256L6.52779 16.65C6.52779 16.65 7.11556 16.9586 7.74921 17.1565L9.22621 16.0471C9.34959 15.9544 9.5029 15.9107 9.65662 15.9243C9.65662 15.9243 10 15.9546 10.3434 15.9243C10.4971 15.9107 10.6504 15.9544 10.7738 16.0471L12.2505 17.1563C12.2505 17.1563 12.8841 16.9577 13.4723 16.6496L13.7328 14.8256C13.7532 14.6829 13.8223 14.5517 13.9284 14.4541C13.9284 14.4541 14.1094 14.2876 14.463 13.9189C14.5597 13.8181 14.6874 13.7526 14.8257 13.7328L16.6501 13.4722C16.6501 13.4722 16.9587 12.8844 17.1566 12.2508L16.0471 10.7738C15.9545 10.6504 15.9107 10.4972 15.9243 10.3435C15.9243 10.3435 15.9441 10.119 15.9225 9.62908C15.9161 9.48439 15.9602 9.34198 16.0471 9.22618L17.1563 7.74952C17.1563 7.74952 16.9578 7.11589 16.6496 6.5277L14.8257 6.26713C14.6828 6.24673 14.5515 6.17754 14.4539 6.0713C14.4539 6.0713 14.2059 5.80142 13.9281 5.54563C13.8222 5.44805 13.7532 5.31688 13.7328 5.1743Z"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  );
}
