type Props = {
  variant?: "hero" | "dual" | "subtle";
};

export function Orbs({ variant = "hero" }: Props) {
  if (variant === "subtle") {
    return (
      <div
        className="orb h-72 w-72 bg-primary -top-12 right-1/4"
        aria-hidden="true"
      />
    );
  }

  if (variant === "dual") {
    return (
      <>
        <div
          className="orb h-[420px] w-[420px] bg-primary -left-24 -top-24"
          aria-hidden="true"
        />
        <div
          className="orb h-[360px] w-[360px] bg-secondary -right-24 -bottom-12"
          aria-hidden="true"
        />
      </>
    );
  }

  return (
    <>
      <div
        className="orb h-[500px] w-[500px] bg-primary -left-24 -top-32"
        aria-hidden="true"
      />
      <div
        className="orb h-[400px] w-[400px] bg-secondary -right-12 -bottom-12"
        aria-hidden="true"
      />
    </>
  );
}
