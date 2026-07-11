import SearchResults from '../components/SearchResults';
import PropertySearch from '../components/PropertySearch';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSearch = (filters) => {
    const params = new URLSearchParams();
    if (filters.operation) params.append('operation', filters.operation);
    if (filters.location) params.append('location', filters.location);
    if (filters.type) params.append('type', filters.type);
    
    navigate(`/buscar?${params.toString()}`);
  };

  const initialFilters = {
    operation: searchParams.get('operation') || 'Comprar',
    location: searchParams.get('location') || '',
    type: searchParams.get('type') || ''
  };

  return (
    <div className="min-h-screen">
      <PropertySearch onSearch={handleSearch} initialFilters={initialFilters} />
      <SearchResults />
    </div>
  );
}
