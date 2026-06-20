import logo from "@/assets/logo.jpg";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logo.src}
      alt="Zegora logo — Zegora Foreign Private Employment Agent Ethiopia"
      className={className}
      width={600}
      height={180}
      draggable={false}
    />
  );
}
