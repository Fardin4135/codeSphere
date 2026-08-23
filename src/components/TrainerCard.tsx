import type { Trainer } from "../data/trainers";

interface TrainerCardProps {
  trainer: Trainer;
}

const TrainerCard = ({ trainer }: TrainerCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#E8E5E0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50">
      
      {/* Trainer Image */}
      <div className="relative h-64 overflow-hidden bg-[#EDE9FE]">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#111111]">
          {trainer.name}
        </h3>

        <p className="mt-1 text-sm font-medium text-[#8B5CF6]">
          {trainer.role}
        </p>

        <p className="mt-2 text-sm text-[#6B6B6B]">
          {trainer.experience}
        </p>

        <p className="mt-4 text-sm leading-6 text-[#6B6B6B]">
          {trainer.description}
        </p>

        {/* Skills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {trainer.skills.map((skill: string) => (
            <span
              key={skill}
              className="rounded-full bg-[#EDE9FE] px-3 py-1 text-xs font-medium text-[#7C3AED]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;