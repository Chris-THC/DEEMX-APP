import PlaybackBar from "@/pages/home/components/PlaybackBar";
import SidebarApp from "@/pages/home/components/Sidebar";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <div className="bg-blue-600 h-[60px] flex flex-col justify-center items-start ">
        <h1 className="text-3xl font-bold ml-3 text-[#fff]">DEEMX</h1>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <SidebarApp />

        <main className="flex-1 overflow-auto">{children}</main>
      </div>
      <PlaybackBar />
    </div>
  );
};

export default LayoutComponent;
