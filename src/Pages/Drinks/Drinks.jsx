import './Drinks.css';
const Drinks = () => {
  return (
    <div className='bg-black py-5'>
      <div className="h-[90vh] max-w-7xl mx-auto bg-white rounded-3xl">
      <h2 className="text-8xl text-Black text-center font-DM  py-10">Friday Special</h2>
      <div>
     
    <div className="container">
        <div className="drop">
            <div className="content">
                <h2>01</h2>
             <img className='w-36 ' src="https://i.ibb.co/tMRxbYD/OIP.jpg" alt="" />
                <a  href="#">Order Now</a>
            </div>
        </div>
        <div className="drop" >
            <div className="content">
                <h2>02</h2>
                <img className='w-36 ' src="https://i.ibb.co/3Bmszgt/R.jpg" alt="" />
                <a  href="#">Order Now</a>
            </div>
        </div>
        <div className="drop" >
            <div className="content">
                <h2>03</h2>
                <img className='w-44 ' src="https://i.ibb.co/TtXGWx1/th.jpg" alt="" />
                <a  href="#">Order Now</a>
            </div>
        </div>
    </div>

      </div>
    </div>
    </div>
  );
};

export default Drinks;