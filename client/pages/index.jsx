import withLayout from '@/layout';
// import ShoppingCart from '@/components/widgets/Cart';
import Banner from '@/components/Banner/HomeBanner';
import Subscription from '@/components/Subscription';
import DeliveryServices from '@/components/Banner/DeliveryServices';
import RestaurantWelcome from '@/components/Banner/RestaurantWelcome';
import FoodsContent from '@/components/Foods/FoodsContent';
import SpecialOffers from '@/components/Banner/SpecialOffers';


const Home = () => {
  return (
    <>
      {/* ----- Shopping Cart ------ */}
      {/* <ShoppingCart /> */}

      {/* ----- Banner Carousel ----- */}
      <Banner />

      {/*-------------- Title Of Delivery and Others ShowCase ----------*/}
      <DeliveryServices />


      {/*------------- WELCOME Section -------------*/}
      <RestaurantWelcome />


      {/*------------ Food Content ---------------*/}
      <FoodsContent />

      {/*------------------- SPECIAL OFFERS FOOD MENU ----------------*/}
      <SpecialOffers />


      {/*------------- Subscription --------------*/}
      <Subscription />
    </>
  )
}


export default withLayout(Home);