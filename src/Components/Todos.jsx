import { Icon } from "@iconify-icon/react/dist/iconify.js";

export default function Todos({ id, todoTitle, status, onRemove,onEdit }) {




  const getStatusClass = () => {
    return status ? "opacity-50" : "opacity-100";
  };

  return (
    <div className={`${getStatusClass()} w-[350px] pl-2 bg-purple-300 flex items-center justify-between rounded-lg  `}>
      <span>{todoTitle}</span>
      <div className="flex items-center">
        <Icon
          onClick={()=>{onEdit(id)}}
          className=" bg-green-400 cursor-pointer hover:bg-green-300"
          icon="mynaui:check-solid"
          width="35"
          height="35"
        />
        <Icon
          onClick={() => {
            onRemove(id);
          }}
          className="bg-red-400 cursor-pointer hover:bg-red-300 "
          icon="mynaui:trash"
          width="35"
          height="35"
        />
      </div>
    </div>
  );
}
