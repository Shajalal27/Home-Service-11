import { useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "../component/PopularService/ServiceCard";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/service`)
      .then(res => {
        setServices(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const filteredServices = services.filter(service => {
    const name = service.service_name || '';
    const description = service.service_description || '';
    const providerName = service.providerName || '';
    const area = service.service_area || '';

    return (
      name.toLowerCase().includes(searchText.toLowerCase()) ||
      description.toLowerCase().includes(searchText.toLowerCase()) ||
      providerName.toLowerCase().includes(searchText.toLowerCase()) ||
      area.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = filteredServices.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredServices.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold italic text-center pt-4">All Services</h2>
        <div className="flex gap-2 items-center justify-center pt-2">
          <input
            type="text"
            id="searchInput"
            onChange={handleSearch}
            value={searchText}
            name="search"
            placeholder="Enter Service Title"
            aria-label="Enter Service Title"
            className="input input-bordered w-full max-w-xs pl-4 text-lg font-semibold"
          />
          <button className="btn btn-primary text-xl font-semibold">Search</button>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 pt-16">
        {
          currentRecords.map(service => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))
        }
      </div>
      <div className="flex justify-center items-center mt-8 pb-10">
        <ul className="flex space-x-2">
          <li className="page-item">
            <a
              href="#"
              className="page-link px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-200"
              onClick={prePage}
            >
              Prev
            </a>
          </li>
          {
            numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? 'active' : ''}`}
                key={i}
              >
                <a
                  href="#"
                  className={`page-link px-4 py-2 rounded transition-colors duration-200 ${
                    currentPage === n 
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            ))
          }
          <li className="page-item">
            <a
              href="#"
              className="page-link px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-200"
              onClick={nextPage}
            >
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AllServices;
