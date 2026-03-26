import Image from 'next/image';

export function Brand() {
  return (
    <span className="inline-flex items-center gap-3 text-fd-foreground">
      <span className="overflow-hidden rounded-2xl border border-fd-border/60 shadow-sm">
        <Image
          src="/logo/light.svg"
          alt="Aisten"
          width={32}
          height={32}
          className="block dark:hidden"
          priority
        />
        <Image
          src="/logo/dark.svg"
          alt="Aisten"
          width={32}
          height={32}
          className="hidden dark:block"
          priority
        />
      </span>
      <span className="text-sm font-semibold tracking-[0.12em] uppercase">Aisten</span>
    </span>
  );
}
