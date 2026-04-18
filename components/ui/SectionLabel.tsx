interface SectionLabelProps {
  children: string;
  light?: boolean;
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <p
      className="text-xs uppercase tracking-[0.15em] font-semibold mb-4"
      style={{ color: light ? "#C4973C" : "#C4973C" }}
    >
      {children}
    </p>
  );
}
