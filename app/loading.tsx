import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-100 opacity-50 flex items-center justify-center">
        <Loader className="animate-spin w-12 h-12 text-primary " />
      </div>

      {/* Your component content */}
    </div>
  );
};

export default Loading;