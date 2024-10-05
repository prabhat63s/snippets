import CommonLayout from "../components/layout/CommonLayout";

export default function TemplatePage() {
  return (
    <CommonLayout>
      <div className="w-full flex items-center justify-center flex-col text-center gap-6 my-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl lg:text-4xl font-semibold">
            Beautifully designed website templates
          </h1>
          <p className="text-sm">
            50+ beautiful sections and templates built with React, Tailwind CSS,
            and Framer Motion. Save thousands of hours, create a beautiful
            landing page, and convert your visitors into customers.
          </p>
        </div>

        <div className="flex items-center justify-center mt-20">
          <div className="relative inline-block text-2xl font-bold text-center">
            <span className="block">Coming Soon</span>
            <span className="absolute top-0 left-0 inline-flex w-full h-full rounded-full bg-neutral-500 opacity-75 animate-ping"></span>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
}
