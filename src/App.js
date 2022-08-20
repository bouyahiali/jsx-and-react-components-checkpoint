import logo from './logo.svg';
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import BreadcrumbExample from './Component/Profile/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <div className="container">
      <BreadcrumbExample/>
      <div className="row">
        <ProfilePhoto/>
        <FullName/>
      </div>
      <Address/>
    </div>

  );
}

export default App;
