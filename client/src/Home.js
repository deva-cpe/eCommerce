import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src='https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg' alt='home_banner' />
      </div>
      <div className='home_row'>
        <Product title={'Lean Startup'} price={29.99} image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg" rating={3} />
        <Product title={'Pay your credit card bills on Amazon'} price={129.00} image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/FEBGTM/Electricity_186x116._SY116_CB646259375_.jpg" rating={5} />
      </div>
      <div className='home_row'>
        <Product title={'Shop by Category'} price={199.99} image="https://m.media-amazon.com/images/I/81617E+QgSS._AC_SY200_.jpg" rating={4} />
        <Product title={'Electronics devices for home office'} price={229.99} image="	https://m.media-amazon.com/images/I/514-TVQweyL._AC_SY200_.jpg" rating={5} />
        <Product title={'Up to 45% off | Shop by Pet'} price={9.99} image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg" rating={5} />
      </div>
      <div className='home_row'><Product title={'Family essentials | Amazon Brands & more'} price={29.99} image="https://m.media-amazon.com/images/I/811wpORWfAL._AC_SY200_.jpg" rating={2} /></div>
    </div>
  )
}

export default Home