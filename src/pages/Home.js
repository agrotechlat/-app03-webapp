import SeedsCollection from "../components/SeedsColection";
import TrayList from "../components/TrayList";
import { Link } from "react-router-dom";
import NewCultureForm from "../components/NewCultureForm";
import EditCulture from "../components/EditCulture";
import RiegoComponentsList from "../components/Riego";
const Home = ({ user = "prueba" }) => {

  return (
    <>
      {/* Hero section */}
      <section className=" flex flex-col justify-center items-center text-center">
        {/* Headlines */}
        <div>
  <div class=" mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
  <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="font-bold">
            <span className="mb-10 text-green-600 block">Welcome! {user}</span>
          </h1>
          
        </div>
    <h2 class="mb-10 text-3xl font-extrabold tracking-tight text-green-800 sm:text-4xl">
      <span className="block">Food for All, Food for the Future.</span>
      <span className="block p-5 text-blue-600">Start Now</span>
    </h2>
    <div class="mt-8 flex flex-col  items-center text-center">
      <div class="rounded-md shadow">
        <Link to="/farming" href="#" className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-500">
          Farming
        </Link>
      </div>
      <div class="mt-10 rounded-md shadow">
        <Link to="/irrigation" className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500">
          Irrigation
        </Link>
      </div>
    </div>
  </div>
</div>

      </section>
    </>
  );
};

export default Home;
