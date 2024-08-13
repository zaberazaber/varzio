import React from "react";

interface Props {
  // Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  width?: number
  height?: number
  iconName?: string
}

const AccordionIcon: React.FC<Props> = props => {
  switch(props.iconName){
    case "AccordionS": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
      )
    }
    case "Accordion": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
      )
    }
    case "Button": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
        <path d="M13 13l6 6" />
      </svg>
      )
    }
    case "ButtonS": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
        <path d="M13 13l6 6" />
      </svg>
      )
    }
    case "Calendar": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
        <line x1={16} y1={2} x2={16} y2={6} />
        <line x1={8} y1={2} x2={8} y2={6} />
        <line x1={3} y1={10} x2={21} y2={10} />
      </svg>
      )
    }
    case "CalendarS": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
        <line x1={16} y1={2} x2={16} y2={6} />
        <line x1={8} y1={2} x2={8} y2={6} />
        <line x1={3} y1={10} x2={21} y2={10} />
      </svg>
      )
    }
    case "Card": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      </svg>
      )
    }
    case "CardS": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      </svg>
      )
    }
    case "Carousel": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="13 17 18 12 13 7" />
        <polyline points="6 17 11 12 6 7" />
      </svg>
      )
    }
    case "CarouselS": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="13 17 18 12 13 7" />
        <polyline points="6 17 11 12 6 7" />
      </svg>
      )
    }
    case "Countdown": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={12} cy={12} r={7} />
        <polyline points="12 9 12 12 13.5 13.5" />
        <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
      </svg>
      )
    }
    case "CountdownS": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={12} cy={12} r={7} />
        <polyline points="12 9 12 12 13.5 13.5" />
        <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
      </svg>
      )
    }
    case "Dropdown": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={12} cy={12} r={1} />
        <circle cx={12} cy={5} r={1} />
        <circle cx={12} cy={19} r={1} />
      </svg>
      )
    }
    case "DropdownS": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={12} cy={12} r={1} />
        <circle cx={12} cy={5} r={1} />
        <circle cx={12} cy={19} r={1} />
      </svg>
      )
    }
    case "Grid": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x={3} y={3} width={7} height={7} />
        <rect x={14} y={3} width={7} height={7} />
        <rect x={14} y={14} width={7} height={7} />
        <rect x={3} y={14} width={7} height={7} />
      </svg>
      )
    }
    case "GridS": {
      return (
        <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x={3} y={3} width={7} height={7} />
      <rect x={14} y={3} width={7} height={7} />
      <rect x={14} y={14} width={7} height={7} />
      <rect x={3} y={14} width={7} height={7} />
    </svg>
      )
    }
    case "Input": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1={9} y1={20} x2={15} y2={20} />
        <line x1={12} y1={4} x2={12} y2={20} />
      </svg>
      )
    }
    case "InputS": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1={9} y1={20} x2={15} y2={20} />
        <line x1={12} y1={4} x2={12} y2={20} />
      </svg>
      )
    }
    case "Link": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
      )
    }
    case "LinkS": {
      return (
        <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
      )
    }
    case "Loader": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1={12} y1={2} x2={12} y2={6} />
        <line x1={12} y1={18} x2={12} y2={22} />
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
        <line x1={2} y1={12} x2={6} y2={12} />
        <line x1={18} y1={12} x2={22} y2={12} />
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
      </svg>
      )
    }
    case "LoaderS": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1={12} y1={2} x2={12} y2={6} />
        <line x1={12} y1={18} x2={12} y2={22} />
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
        <line x1={2} y1={12} x2={6} y2={12} />
        <line x1={18} y1={12} x2={22} y2={12} />
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
      </svg>
      )
    }
    case "Modal": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1={12} y1="22.08" x2={12} y2={12} />
      </svg>
      )
    }
    case "ModalS": {
      return (
        <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1={12} y1="22.08" x2={12} y2={12} />
    </svg>
      )
    }
    case "Navbar": {
      return (
        <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="relative z-10 mb-2 text-2xl text-rose-600"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1={3} y1={12} x2={21} y2={12} />
      <line x1={3} y1={6} x2={21} y2={6} />
      <line x1={3} y1={18} x2={21} y2={18} />
    </svg>
      )
    }
    case "NavbarS": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1={3} y1={12} x2={21} y2={12} />
        <line x1={3} y1={6} x2={21} y2={6} />
        <line x1={3} y1={18} x2={21} y2={18} />
      </svg>
      )
    }
    case "Notification": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
      )
    }
    case "NotificationS": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
      )
    }
    case "Other": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={12} cy={12} r={4} />
        <line x1="1.05" y1={12} x2={7} y2={12} />
        <line x1="17.01" y1={12} x2="22.96" y2={12} />
      </svg>
      )
    }
    case "OtherS": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={12} cy={12} r={4} />
        <line x1="1.05" y1={12} x2={7} y2={12} />
        <line x1="17.01" y1={12} x2="22.96" y2={12} />
      </svg>
      )
    }
    case "Progress": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1={12} y1={2} x2={12} y2={6} />
        <line x1={12} y1={18} x2={12} y2={22} />
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
        <line x1={2} y1={12} x2={6} y2={12} />
        <line x1={18} y1={12} x2={22} y2={12} />
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
      </svg>
      )
    }
    case "ProgressS": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1={12} y1={2} x2={12} y2={6} />
        <line x1={12} y1={18} x2={12} y2={22} />
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
        <line x1={2} y1={12} x2={6} y2={12} />
        <line x1={18} y1={12} x2={22} y2={12} />
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
      </svg>
      )
    }
    case "Tab": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <polyline points="13 2 13 9 20 9" />
      </svg>
      )
    }
    case "TabS": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <polyline points="13 2 13 9 20 9" />
      </svg>
      )
    }
    case "Table": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" />
      </svg>
      )
    }
    case "TableS": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" />
      </svg>
      )
    }
    case "Text": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1={16} y1={13} x2={8} y2={13} />
        <line x1={16} y1={17} x2={8} y2={17} />
        <polyline points="10 9 9 9 8 9" />
      </svg>
      )
    }
    case "TextS": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1={16} y1={13} x2={8} y2={13} />
        <line x1={16} y1={17} x2={8} y2={17} />
        <polyline points="10 9 9 9 8 9" />
      </svg>
      )
    }
    case "Toggle": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 mb-2 text-2xl text-rose-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x={1} y={5} width={22} height={14} rx={7} ry={7} />
        <circle cx={8} cy={12} r={3} />
      </svg>
      )
    }
    case "ToggleS": {
      return (
        <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -right-4 -top-4 z-10 text-7xl text-rose-200"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x={1} y={5} width={22} height={14} rx={7} ry={7} />
        <circle cx={8} cy={12} r={3} />
      </svg>
      )
    }
  }

  
}

export default AccordionIcon