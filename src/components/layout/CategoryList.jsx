import { Link } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";

const CategoryList = () => {
  const { data, isLoading, isError, error } = useCategories();

  return (
    <div className="hidden dropdown dropdown-hover lg:block">
      <div tabIndex={0} role="button">
        Category
      </div>
      <ul
        tabIndex={0}
        className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-max"
      >
        {isError && error.response.status === 404 ? (
          <span className="block text-center capitalize">
            {error.response?.data?.errors || "Something went wrong."}
          </span>
        ) : isLoading ? (
          <div className="grid gap-1">
            <div className="h-6 skeleton w-52" />
            <div className="h-6 skeleton w-52" />
            <div className="h-6 skeleton w-52" />
            <div className="h-6 skeleton w-52" />
          </div>
        ) : (
          data?.map((result) => (
            <li key={result.id}>
              <Link to={`/products/categories/${result.name.toLowerCase()}`}>
                {result.name}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default CategoryList;
