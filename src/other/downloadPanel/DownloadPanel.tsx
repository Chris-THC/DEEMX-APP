import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TrackCardStore, storeTrack } from "@/store/track/TrackStore";
import { Separator } from "@radix-ui/react-select";
import { Download, DownloadIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

interface TrackProp {
  trackToDonw: TrackCardStore;
}

interface BtnProp {
  textBtn?: string;
  onDownload?: () => void;
}

const CradDownload: React.FC<TrackProp> = ({ trackToDonw }) => {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isSuccesDownload, setIsSuccesDownload] = useState(false);

  useEffect(() => {
    const socket = io();

    socket.on("download-progress", (data) => {
      setDownloadProgress(data.progress);
    });
    socket.on("download-success", (data) => {
      setIsSuccesDownload(data.success);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#f3f4f6] rounded-lg shadow-md p-3 w-full max-w-xs flex items-center space-x-3">
      <img
        src={trackToDonw?.coverUrl}
        alt="Carátula del álbum"
        className="w-10 h-10 rounded-md object-cover"
      />
      <div className="flex-1 min-w-0 ml-2">
        <div className="flex justify-between items-start">
          <div className="truncate">
            <h2 className="text-sm font-medium text-gray-800 truncate">
              {trackToDonw?.title}
            </h2>
            <p className="text-xs text-gray-600 truncate">
              {trackToDonw?.artist}
            </p>
          </div>
          <button
            aria-label="Descargar canción"
            className="text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0 ml-2"
          >
            <DownloadIcon className="w-4 h-4" />
          </button>
        </div>
        <div style={{ marginTop: 10 }}>
          <div className="bg-gray-200 h-1 rounded-full overflow-hidden">
            <Progress
              value={isSuccesDownload ? 100 : downloadProgress}
              style={{ height: "5px" }}
              className="w-full"
              color={"#22c55e"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DownloadPanel: React.FC<BtnProp> = ({ textBtn, onDownload }) => {
  const { trackToDonw } = storeTrack();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          onClick={onDownload}
          variant="ghost"
          className="w-full justify-start"
        >
          {!textBtn ? (
            <>
              <Download className="mr-2 h-4 w-4" />
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              {textBtn}
            </>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-transparent border-none">
        <SheetHeader>
          <SheetTitle className="text-white">Descargas</SheetTitle>
          <div className="border border-white"></div>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {!trackToDonw ? <></> : <CradDownload trackToDonw={trackToDonw} />}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default DownloadPanel;
