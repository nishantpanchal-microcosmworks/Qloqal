type Props = {
  value: string;
  label: string;
};

export function StatBlock({ value, label }: Props) {
  return (
    <div className="text-center">
      <div className="font-display text-h1 text-primary mb-1">{value}</div>
      <div className="text-label-caps uppercase text-on-surface-variant">{label}</div>
    </div>
  );
}
