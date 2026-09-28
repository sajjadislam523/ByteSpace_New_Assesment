import { cn } from "@/lib/cn";

type RevenueCardProps = {
  title: string;
  period: string;
  amount: string;
  change: string;
  /** Fill of the lime bar in %. Without it the change pill sits under the amount. */
  progress?: number;
  className?: string;
};

/** Blue creator-dashboard card: "Total Revenue", "Year to Date". */
export function RevenueCard({ title, period, amount, change, progress, className }: RevenueCardProps) {
  const amountText = (
    <p className="font-heading text-2xl leading-8 font-semibold tracking-[-0.24px] whitespace-nowrap">
      {amount}
    </p>
  );
  // Electric Lime/500
  const changePill = (
    <p className="rounded-3xl bg-[#cbfc01] px-2 py-0.5 text-[10px] leading-5 font-medium whitespace-nowrap text-shuttle-950">
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
        <p className="text-[10px] leading-[1.2]">{period}</p>
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
