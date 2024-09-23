import { Loader2 } from "lucide-react";
import { BallTriangle } from "react-loader-spinner";

const IsLoadingComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#2563eb"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default IsLoadingComponent;
