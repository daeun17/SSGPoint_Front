import React from "react";

const Group = () => {
  return (
    <svg
      className="w-[360px] h-14"
      style={{
        filter: "drop-shadow(0px -2px 10px rgba(0,0,0,0.05))",
      }}
      width={380}
      height={76}
      viewBox="0 0 380 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_3_6400)">
        <rect x={10} y={12} width={360} height={56} fill="white" />
        <path d="M137 58H242" stroke="#B0B0B0" strokeWidth={3} strokeLinecap="round" />
        <g opacity={0.9}>
          <rect
            x={273.333}
            y={23.6665}
            width={10}
            height={12.5}
            rx={1}
            stroke="#454545"
            strokeWidth={2}
          />
          <path
            d="M286.667 27V37.5C286.667 38.6046 285.771 39.5 284.667 39.5H276.667"
            stroke="#454545"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M42.5 27L37.5 32L42.5 37"
            stroke="#454545"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M97.5 37L102.5 32L97.5 27"
            stroke="#ACACAC"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M219.049 24.927C219.348 24.0057 220.652 24.0057 220.951 24.9271L222.021 28.2188C222.155 28.6309 222.538 28.9098 222.972 28.9098H226.433C227.402 28.9098 227.804 30.1494 227.021 30.7188L224.22 32.7533C223.87 33.0079 223.723 33.4593 223.857 33.8713L224.927 37.1631C225.226 38.0844 224.172 38.8506 223.388 38.2812L220.588 36.2467C220.237 35.9921 219.763 35.9921 219.412 36.2467L216.612 38.2812C215.828 38.8506 214.774 38.0844 215.073 37.1631L216.143 33.8713C216.277 33.4593 216.13 33.0079 215.78 32.7533L212.979 30.7188C212.196 30.1494 212.598 28.9098 213.567 28.9098H217.028C217.462 28.9098 217.845 28.6309 217.979 28.2188L219.049 24.927Z"
            stroke="#454545"
            strokeWidth={2}
          />
          <path
            d="M153.333 31.2409V37.5C153.333 38.6046 154.229 39.5 155.333 39.5H164.667C165.771 39.5 166.667 38.6046 166.667 37.5V31.2409C166.667 30.6641 166.418 30.1155 165.984 29.7357L161.317 25.6524C160.563 24.9926 159.437 24.9926 158.683 25.6524L154.016 29.7357C153.582 30.1155 153.333 30.6641 153.333 31.2409Z"
            stroke="#454545"
            strokeWidth={2}
          />
          <path
            d="M157.5 39.5002V34.8335C157.5 33.7289 158.395 32.8335 159.5 32.8335H160.5C161.605 32.8335 162.5 33.7289 162.5 34.8335V39.5002"
            stroke="#454545"
            strokeWidth={2}
          />
          <path d="M333.333 27H346.667" stroke="#454545" strokeWidth={2} strokeLinecap="round" />
          <path
            d="M333.333 32.8335L346.667 32.8335"
            stroke="#454545"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M333.333 38.6665H346.667"
            stroke="#454545"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_3_6400"
          x={0}
          y={0}
          width={380}
          height={76}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={-2} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_6400" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3_6400"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Group;