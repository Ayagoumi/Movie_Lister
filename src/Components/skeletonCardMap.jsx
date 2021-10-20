const SkeletonCardMap = () => {
  const skeletonArray = Array(12).fill("");
  return (
    <div className="grid grid-cols-2 gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3">
      {skeletonArray.map((item, index) => (
        <div className="max-w-sm w-full mx-auto" key={index}>
          <div className="border border-gray-300 shadow rounded-md p-2 max-w-sm mx-auto animate-pulse flex space-x-4 w-full">
            <div className="rounded-md bg-gray-400 h-80 w-full"></div>
          </div>
          <div className="flex-1 py-1">
            <div className="h-4 bg-gray-400 rounded w-3/4"></div>
            <div className="flex flex-row justify-between mt-2">
              <div className="rounded text-xs w-1/4 h-6 flex justify-center items-center">
                <div className="bg-gray-400 h-4 w-full rounded"></div>
              </div>
              <div
                className="rounded-md p-1 text-xs border-gray-300 w-1/4 h-6"
                style={{ borderWidth: "1.5px" }}
              >
                <div className="bg-gray-400 h-full w-full rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCardMap;
