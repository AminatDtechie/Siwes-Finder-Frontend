import { toast } from "react-toastify";
import { MdCheckCircle } from "react-icons/md";

export const onSuccess = (success) => {
  const successComponent = (
    <div className="flex items-center z-[999] gap-[10px] text-lime-700">
      <MdCheckCircle className="text-[25px] " />
      <div className="flex flex-col">
       <strong className="text-sm">{success.message}</strong>
       <p className="text-little text-gray-400">{success.success}</p>
      </div>
       
    </div>
  );

  toast(successComponent);
};
