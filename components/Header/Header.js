import Navigation from '../Navigation/Navigation';

function Header({navigation}) {
  return (
    <header 
        className='py-3'
        style={{backgroundColor: 'lightblue'}}
      >
        <div className='container-fluid'>
        <h1 className="text-center pb-5">Headless Wordpress</h1>  
            
            <Navigation navigation={navigation} />

        </div>
      </header>
  )
}

export default Header