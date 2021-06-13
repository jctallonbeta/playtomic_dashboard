interface LabelledInputProps extends React.ComponentProps<"input"> {
  labelText?: string;
}

export const LabelledInput = ({
  labelText = "",
  ...props
}: LabelledInputProps) => {
  return (
    <div className="flex flex-col mb-8">
      <label htmlFor={props.id} className="text-sm text-gray-400">
        {labelText}
      </label>
      <input
        className="border-b border-gray-200 focus:border-primary pt-2 pb-1 outline-none"
        {...props}
      />
    </div>
  );
};
