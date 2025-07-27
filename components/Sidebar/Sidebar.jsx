import { GetMoreStorage, Navigation, NewAddButton } from "@/components";

const Sidebar = () => {
  return (
    <div className="sidebar w-[256px] min-w-[236px] max-w-[381px] h-full overflow-x-hidden">
      <NewAddButton />

      <Navigation />
      <GetMoreStorage />
    </div>
  );
};

export default Sidebar;
