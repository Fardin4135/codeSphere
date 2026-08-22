import type { Trainer } from "../data/trainers";

interface TrainerCardProps {
  trainer: Trainer;
}

const TrainerCard = ({ trainer }: TrainerCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      {/* Trainer Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">
          {trainer.name}
        </h3>

        <p className="mt-1 text-sm font-medium text-blue-600">
          {trainer.role}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          {trainer.experience}
        </p>

        <p className="mt-4 text-sm leading-6 text-gray-600">
          {trainer.description}
        </p>

        {/* Skills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {trainer.skills.map((skill: string) => (
            <span
              key={skill}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
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