import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import toast from "react-hot-toast";

const showDownloadToast = (
  title: string,
  artist: string,
  coverUrl: string,
  progress: number
) => {
  toast.custom((t) => (
    <Card
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-[50%] bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <CardContent className="p-3">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0 mr-2">
            <img
              alt="Portada del álbum"
              className="w-11 h-11 object-cover rounded"
              src={coverUrl}
              style={{
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="flex-grow min-w-0">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-sm font-medium truncate mr-2">{title}</h3>
            </div>
            <p className="text-xs text-muted-foreground truncate mb-1">
              {artist}
            </p>
          </div>
          <div className="flex-row justify-center align-middle">
            <span className="text-xs text-muted-foreground mx-5">33%</span>
            <Download className="h-4 w-4 text-muted-foreground mx-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  ));
};

export default showDownloadToast;
