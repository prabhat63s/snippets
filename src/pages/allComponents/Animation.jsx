import ComponentPageLayout from "../../components/layout/ComponentPageLayout";
import TabCard from "../../components/TabCard";

export default function Animation() {
  const animations = [
    {
      id: "default-button",
      title: "Default button",
      leftCode: (
        <button
          type="button"
          className="text-white bg-neutral-950 hover:bg-neutral-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Default button
        </button>
      ),
      rightCode: `
    <button
      type="button"
      className="text-white bg-neutral-950 hover:bg-neutral-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
      Default
    </button>`,
    },
  ];
  return (
    <ComponentPageLayout>
      <div className="w-full h-full flex">
        <div className="lg:w-[75%] h-full flex flex-col gap-4 leading-6 overflow-y-auto scrollbar-hide">
          <div className="flex flex-col gap-6">
            {/* Navigation Path */}
            <p className="flex items-center gap-1 text-neutral-400">
              Docs <span className="text-white">{">"} Animation</span>
            </p>

            {/* Title */}
            <h1 className="text-xl lg:text-2xl font-semibold">Animation</h1>

            {/* Introduction */}
            <p className="text-neutral-400">
              The 
            </p>

            <div className="flex flex-col gap-10">
              {animations.map((animation, index) => (
                <TabCard
                  key={index}
                  index={index}
                  id={animation.id}
                  title={animation.title}
                  leftCode={animation.leftCode}
                  rightCode={animation.rightCode}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-[25%] pl-10 py-4 flex-col gap-2 overflow-y-auto scrollbar-hide">
          <h1 className="font-semibold text-lg">On This Page</h1>
          <div className="text-sm flex flex-col items-start gap-2 text-neutral-200">
            <a href="#default-button">Default button</a>
            <a href="#button-1">Button 1</a>
            <a href="#button-2">Button 2</a>
            <a href="#black-to-gray">Black to gray</a>
            <a href="#google-sign-in">Sign in with Google</a>
          </div>
        </div>
      </div>
    </ComponentPageLayout>
  );
}
