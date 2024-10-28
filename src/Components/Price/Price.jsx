import PropTypes from 'prop-types';
import PriceOptions from '../PriceOptions/PriceOptions';
const Price = () => {
  const priceOptionss = [
    {
      id: 1,
      name: 'Basic Membership',
      features: [
        'Access to gym facilities',
        'Standard workout equipment',
        'Limited gym hours',
        'Access to locker room',
      ],
      price: 30.0,
    },
    {
      id: 2,
      name: 'Premium Membership',
      features: [
        'Access to gym facilities',
        'Full range of workout equipment',
        'Extended gym hours',
        'Group fitness classes',
        'Access to locker room',
      ],
      price: 50.0,
    },
    {
      id: 3,
      name: 'Platinum Membership',
      features: [
        'Access to gym facilities',
        'Full range of workout equipment',
        '24/7 gym access',
        'Personal training sessions',
        'Access to sauna and spa',
        'Access to locker room',
        'Towel service',
      ],
      price: 80.0,
    },
  ];
  return (
    <div>
      <h2 className="text-5xl">Best Prices in the town</h2>
      {priceOptionss.map(optins => (
        <PriceOptions key={optins.id} optins={optins}></PriceOptions>
      ))}
    </div>
  );
};

Price.propTypes = {
  price: PropTypes.object,
  PriceOptions: PropTypes.object,
};
export default Price;
