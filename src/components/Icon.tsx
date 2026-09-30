type IconProps = {
  name: string;
  className?: string;
};

const paths: Record<string, React.ReactNode> = {
  gauge: (
    <>
      <path d="M12 12l4-3" />
      <path d="M12 21a9 9 0 1 1 9-9" />
      <path d="M5.5 5.5a9 9 0 0 1 13 0" />
    </>
  ),
  layers: (
    <>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </>
  ),
  shuffle: (
    <>
      <path d="m18 4 3 3-3 3" />
      <path d="M2 7h5.5A5.5 5.5 0 0 1 12 9.5" />
      <path d="m18 20 3-3-3-3" />
      <path d="M2 17h5.5A5.5 5.5 0 0 0 12 14.5" />
      <path d="M21 7h-3.5" />
      <path d="M21 17h-3.5" />
    </>
  ),
  activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </>
  ),
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
  plug: (
    <>
      <path d="M12 22v-5" />
      <path d="M9 8V2M15 8V2" />
      <path d="M7 8h10v3a5 5 0 0 1-10 0V8Z" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  radar: (
    <>
      <path d="M12 12 20 8" />
      <path d="M12 3a9 9 0 1 0 9 9" />
      <path d="M12 7a5 5 0 1 0 5 5" />
    </>
  ),
  hexLogo: (
    <>
      <path d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z" strokeWidth={2.2} />
      <path d="M10.5 8.5L14.5 12L10.5 15.5" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export default function Icon({ name, className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] ?? paths.sparkles}
    </svg>
  );
}
