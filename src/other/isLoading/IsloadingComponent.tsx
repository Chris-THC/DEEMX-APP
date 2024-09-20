import { Loader2 } from "lucide-react";

const IsLoadingComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
        <p className="mt-4 text-lg font-semibold text-blue-900">Cargando...</p>
        {/* <p className="mt-2 text-sm text-gray-500">
          Por favor, espere mientras actualizamos la información.
        </p> */}
      </div>
    </div>
  );
};

export default IsLoadingComponent;
