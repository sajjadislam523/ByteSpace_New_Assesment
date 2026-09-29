import { CourseCard } from "@/components/course/CourseCard";
import { HappyStudentsCard } from "@/components/home/cards/HappyStudentsCard";
import { Ornament } from "@/components/home/Ornament";
import { courses } from "@/data/courses";
import { heroCards, solidInset, springInset } from "@/data/home";
import { cn } from "@/lib/cn";

export function AuthCollage({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      inert
      className={cn("pointer-events-none absolute h-[585px] w-[548px]", className)}
    >
      <div className="absolute top-[89px] left-[25px] w-[373px]">
        <CourseCard course={courses[1]} tone="showcase" priority />
      </div>
      <div className="absolute top-0 left-[136px] w-[373px]">
        <CourseCard course={courses[2]} tone="showcase" priority />
      </div>
      <HappyStudentsCard
        {...heroCards.students}
        tone="lime"
        className="absolute top-[435px] left-[251px]"
      />
      <Ornament
        src="/images/home/spring.png"
        mask="/images/home/spring-small-mask.png"
        tint="white"
        size={175}
        inset={springInset}
        flip
        className="top-[321px] left-[373px]"
      />
      <Ornament
        src="/images/home/ring.png"
        mask="/images/auth/ring-mask.png"
        tint="lime"
        size={146}
        inset={solidInset}
        className="top-[15px] left-[54px]"
      />
      <Ornament
        src="/images/home/cone.png"
        mask="/images/home/cone-mask.png"
        tint="lime"
        size={188}
        inset={solidInset}
        className="top-[397px] left-0"
      />
    </div>
  );
}
