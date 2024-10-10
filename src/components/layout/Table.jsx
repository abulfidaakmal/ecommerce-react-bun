import Pagination from "@components/layout/Pagination.jsx";

const Table = ({ colName, children, paging }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            {colName.map((result, index) => (
              <th key={index} className="text-sm">
                {result}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      {paging?.total_page > 1 && <Pagination paging={paging} />}
    </div>
  );
};

export default Table;
