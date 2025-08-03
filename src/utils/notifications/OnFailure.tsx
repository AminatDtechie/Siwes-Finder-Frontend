import { toast } from "react-toastify";
import { MdCancel} from "react-icons/md";

export const onFailure = (error) => {
  const failureComponent = (
    <div className="flex items-center w-fit z-[999] text-red-600 gap-[10px]">
      <MdCancel className="text-[25px] " />
      <div className="flex flex-col">
       <strong className="text-sm capitalize">{error?.message}</strong>
       <p className="text-[14px] text-gray-500 ">{error?.error}</p>
      </div>
       
    </div>
  );

  toast(failureComponent);
};
