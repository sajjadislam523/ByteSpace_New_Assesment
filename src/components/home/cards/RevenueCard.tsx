import { cn } from "@/lib/cn";

type RevenueCardProps = {
  title: string;
  period: string;
  amount: string;
  change: string;
  progress?: number;
  className?: string;
};

export function RevenueCard({ title, period, amount, change, progress, className }: RevenueCardProps) {
  const amountText = (
    <p className="font-heading text-2xl leading-8 font-semibold tracking-[-0.24px] whitespace-nowrap">
      {amount}
    </p>
  );
  const changePill = (
    <p className="rounded-3xl bg-[#cbfc01] px-2 py-0.5 text-xs leading-5 md:text-[10px] font-medium whitespace-nowrap text-shuttle-950">
      {change}
    </p>
  );

  return (
    <div
      className={cn(
        "flex flex-col items-start gap-2 rounded-2xl bg-primary p-4 text-shuttle-50",
        className,
      )}
    >
      <div className="whitespace-nowrap">
        <p className="text-label-m">{title}</p>
        <p className="text-xs leading-[1.2] md:text-[10px]">{period}</p>
      </div>
      {progress === undefined ? (
        <>
          {amountText}
          {changePill}
        </>
      ) : (
        <>
          <div className="flex w-[200px] items-center justify-between">
            {amountText}
            {changePill}
          </div>
          <div aria-hidden="true" className="h-2 w-[200px] rounded-3xl bg-white">
            <div className="h-full rounded-3xl bg-accent" style={{ width: `${progress}%` }} />
          </div>
        </>
      )}
    </div>
  );
}
