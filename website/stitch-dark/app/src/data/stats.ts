export type Stat = {
  value: string;
  label: string;
};

export const enterpriseStats: Stat[] = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "24/7", label: "Dedicated TAM" },
  { value: "<50ms", label: "API Latency" },
  { value: "140+", label: "Currencies" },
];
