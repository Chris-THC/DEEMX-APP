import {
    UseMutationResult,
    useMutation
} from "@tanstack/react-query";
import axios from "axios";

const downloadTrackFn = async (idTrack: string): Promise<any> => {    
  try {
    const response = await axios.post("/api/download", {
        idTrack,
    });

    if (response.status === 200) {
      return "Descarga completada";
    } else {
      return "Error en la descarga";
    }
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
    return "Error al realizar la solicitud";
  } finally {
    return false;
  }
};

export const useDownloadTrack = (): UseMutationResult<number, Error, string, unknown> => {
    return useMutation<number, Error, string>({
      mutationFn: downloadTrackFn,
      onSuccess: () => {
        console.log("Success");
      },
      onError: () => {
        console.error("Error");
      },
    });
  };