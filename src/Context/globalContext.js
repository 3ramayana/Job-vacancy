import axios from 'axios';
import { slice, sortBy } from 'lodash';
import moment from 'moment/moment';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState([]);
  const [latestJob, setLatestJob] = useState([]);
  let navigate = useNavigate();

  // Scrool to Top
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // Fetching Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://dev-example.sanbercloud.com/api/job-vacancy'
        );

        setData([...response.data.data]);
      } catch (error) {}
    };

    fetchData();
  }, []);

  // get Job Item
  const handleView = (id) => {
    navigate(`/job-vacancy/${id}`);
  };

  // get Latest Job Post

  useEffect(() => {
    const sortedArr = sortBy(data, function (o) {
      return new moment(o.created_at);
    }).reverse();

    if (sortedArr.length > 6) {
      setLatestJob(slice(sortedArr, 0, 7));
    } else {
      setLatestJob(slice(sortedArr));
    }
  }, [data]);

  return (
    <GlobalContext.Provider value={{ scrollTop, data, handleView, latestJob }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
