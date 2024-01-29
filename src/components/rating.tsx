import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useTheme } from ".";

interface RatingProps {
  ratings: number;
}

const Rating: React.FC<RatingProps> = ({ ratings }) => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-row items-center">
      <div className="flex space-x-0 mr-2">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <StarIcon
            key={index}
            className="h-6 w-6 text-orange-400"
            aria-hidden="true"
          />
        ))}
      </div>
      <div>
        <span className={`text-slate-400`}>({ratings || 0})</span>
      </div>
    </div>
  );
};

export default Rating;
