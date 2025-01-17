import React from "react";
import { Link } from "react-router-dom";
const Card = ({
  handleLeft,
  handleRight,
  data,
  currentImage,
  setCurrentImage,
  heading,
  content,
}) => {
  const handleCurrentImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="absolute bottom-10 w-11/12 bg-[#fe8c00] text-white rounded-[48px] p-6">
      <div>
        <h2 className="text-3xl text-center font-semibold mb-4">{heading}</h2>
        <h3 className="text-center text-sm">{content}</h3>
      </div>

      <div className="thumbs w-full flex justify-center gap-1 mt-4">
        {data.map((_, index) => (
          <div
            key={`thumb-${index}`}
            className={`w-8 h-[6px] rounded ${
              index === currentImage ? "bg-white" : "bg-[#C2C2C2]"
            }`}
            onClick={() => handleCurrentImage(index)}
          ></div>
        ))}
      </div>

      <Link to="/login">
        <div className="h-28 w-full flex items-center justify-center">
          {currentImage === data.length - 1 && (
            <div className="h-28 w-28 flex items-center justify-center mt-8 border-2 border-t-[#fe9514] -rotate-45 rounded-full relative">
              <div className="rotate-45 h-16 w-16 bg-white rounded-full flex items-center justify-center text-[#fe8c00] text-4xl">
                <svg
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-3.05176e-05 7.72566C-3.05176e-05 7.34596 0.282123 7.03217 0.648199 6.98251L0.749969 6.97566L13.934 6.97626L9.17098 2.23273C8.87746 1.94047 8.87644 1.4656 9.1687 1.17207C9.43439 0.905233 9.851 0.88013 10.1451 1.09735L10.2294 1.16979L16.2794 7.19379C16.318 7.23231 16.3517 7.27401 16.3802 7.31804C16.3882 7.33129 16.3964 7.34485 16.4042 7.35868C16.4114 7.37054 16.4178 7.38285 16.4239 7.39529C16.4324 7.4134 16.4407 7.43211 16.4482 7.4512C16.4543 7.46592 16.4594 7.48024 16.464 7.49467C16.4695 7.51256 16.4749 7.53163 16.4795 7.55099C16.483 7.56451 16.4857 7.57751 16.488 7.59057C16.4914 7.61 16.4942 7.63011 16.4962 7.65046C16.498 7.66598 16.499 7.68135 16.4996 7.69674C16.4998 7.70608 16.5 7.71585 16.5 7.72566L16.4996 7.75471C16.499 7.76943 16.498 7.78414 16.4966 7.79881L16.5 7.72566C16.5 7.77299 16.4956 7.81929 16.4872 7.86419C16.4853 7.87491 16.4829 7.88592 16.4804 7.89688C16.475 7.91946 16.4689 7.9412 16.4618 7.96252C16.4583 7.97311 16.4543 7.98442 16.4499 7.99565C16.4412 8.01822 16.4316 8.03973 16.4212 8.06069C16.4163 8.07054 16.4108 8.08086 16.4051 8.09107C16.3958 8.10773 16.3861 8.12356 16.3759 8.13899C16.3687 8.14991 16.3607 8.16127 16.3524 8.17246L16.3459 8.18111C16.3257 8.2075 16.3038 8.23252 16.2803 8.25599L16.2794 8.25669L10.2294 14.2817C9.9359 14.574 9.46103 14.573 9.16874 14.2795C8.90303 14.0127 8.87968 13.596 9.09815 13.3028L9.17094 13.2188L13.932 8.47626L0.749969 8.47566C0.335756 8.47566 -3.05176e-05 8.13987 -3.05176e-05 7.72566Z"
                    fill="#FE8C00"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </Link>

      <div className="flex justify-between mt-4">
        <Link to="/login">
          <button className="text-white p-2 rounded">Skip</button>
        </Link>
        <button className="text-white p-2 rounded" onClick={handleRight}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Card;
