export default function HamburgerIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M4 18h16M4 12h16M4 6h16" />
    </svg>
  );
}
