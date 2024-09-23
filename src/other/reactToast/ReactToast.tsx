import { Download } from "lucide-react";
import toast from "react-hot-toast";

const showDownloadToast = (
  title: string,
  artist: string,
  coverUrl: string,
) => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-[30%] bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
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
            <Download className="h-5 w-5 text-muted-foreground mx-5" />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default showDownloadToast;
