export function ActivityTab() {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  return (
    <>
      <div className="border-2 border-white bg-black w-1/2 rounded-md p-8 translate-y-16 h-screen">
        <div className="space-y-2">
          <h1 className="font-bold text-4xl">Activity</h1>
          <p className="opacity-50">as of {formattedDate} </p>
        </div>
      </div>
    </>
  );
}
