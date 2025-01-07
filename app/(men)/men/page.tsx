import SideSection from "@/components/men-page/SideSection";

const MenPage = () => {
  return (
    <>
    <div className="grid grid-cols-[200px_1fr] h-screen">
      {/* Sidebar */}
      <SideSection heading="Alaseel Clothes" href="/" linkLabel="Show All" />

      {/* Page content */}
      <div className="flex items-center justify-center">
        {/* Content inside */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Welcome to the Centered Section
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            This is the centered content. You can add any elements here.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default MenPage;
