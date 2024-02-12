export default function Button(props:{
    hidden: boolean;
    handleFunction: CallableFunction;
    value: string;
}) {
  return (
    <button
      className={`${
        props.hidden ? "hidden" : ""
      } h-[50px] w-[50px] rounded-full  justify-center items-center ${props.value == "+" ? "bg-green-700" : "bg-red-700"}  `}
      id="namaz"
      onClick={() => props.handleFunction()}
    >
      {props.value}
    </button>
  );
}
