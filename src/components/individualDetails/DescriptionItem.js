const DescriptionItem = ({ title, description, className }) => {
  return (
    <div className={`flex flex-col my-2 ${className}`}>
      <dt className="mr-2 font-normal">{title}</dt>
      <dd className="text-neutralDarkBrown bg-backgroundWhite rounded-lg shadow-md pr-20 pl-2 py-1">
        {description}
      </dd>
    </div>
  );
};

export default DescriptionItem;
