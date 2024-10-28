import axios from 'axios';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio, Grid } from 'react-loader-spinner';

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://openapi.programming-hero.com/api/phones?search=iphone')
      .then(response => {
        const phoneData = response.data.data;
        const phonesWithFakeData = phoneData.map(phone => {
          const price = parseInt(phone.slug.split('-')[1]) || 0; // Default to 0 if parsing fails
          return {
            name: phone.phone_name,
            price,
          };
        });
        setPhones(phonesWithFakeData);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setError('Failed to fetch phone data. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
          <Grid
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{ marginLeft: '20px' }}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      {error && <div className="text-red-500">{error}</div>}
      {!loading && !error && (
        <>
          <h2 className="text-5xl">Phones: {phones.length}</h2>
          <BarChart width={1200} height={400} data={phones} responsive>
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </BarChart>
        </>
      )}
    </div>
  );
};

export default Phones;
