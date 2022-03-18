import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
  return (
    <div className='header'>
      <img
        src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'
        className='header_logo'
      />
      <div className='header_search'>
        <input className='header_seachInput' type={'text'} />
        <SearchIcon className='header_searchIcon' />
      </div>
      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'>Hello User</span>
          <span className='header_optionLineTwo'>Sign In</span>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>Return</span>
          <span className='header_optionLineTwo'>& Orders</span>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
        </div>
        <div className='header_cart'>
          <ShoppingCartIcon />
          <span className='header_optionLineTwo header_cartCount'>0</span>
        </div>
      </div>
    </div>
  )
}

export default Header