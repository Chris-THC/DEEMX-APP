import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { storeSearch } from "@/store/search/SearchStore";
import { Search } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const { setSearchText } = storeSearch();

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  const handleSearch = () => {
    setSearchText(searchTerm);
    handleNavigation("/search");
  };

  return (
    <div className="shadow-sm w-[80%]">
      <div className="max-w-7xl mx-4 sm:px-1 lg:px-1 py-4">
        <div className="flex items-center w-full">
          <Input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow bg-gray-100 border-none focus:ring-2 focus:ring-blue-500"
          />
          <Button
            onClick={handleSearch}
            className="ml-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
