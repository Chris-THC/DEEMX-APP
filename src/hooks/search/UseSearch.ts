import axios from "axios";
import { SearchI } from "@/interfaces/search/Search";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

const searchAnything = async (searchSomething: string): Promise<SearchI> => {
  try {
    const response = await axios.get(`/api/search?search=${searchSomething}`);
    return response.data;
  } catch (error) {
    console.log("Algo pasó", error);
    throw new Error("Error al obtener los datos del artista");
  }
};

export const useSearch = (search: string): UseQueryResult<SearchI> => {
  return useQuery({
    queryKey: ["searchInfo"],
    queryFn: () => searchAnything(search),
  });
};
