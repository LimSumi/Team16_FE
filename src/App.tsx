import './App.css';
import { RecoilRoot } from 'recoil';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import DetailPetPage from 'pages/DetailPetPage';
import Home from 'pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProfileListPage from 'pages/ProfileListPage';
import ShelterInfoPage from 'pages/ShelterInfoPage';
import UrgentListPage from 'pages/UrgentListPage';
import NewListPage from 'pages/NewListPage';
import LoginPage from 'pages/LoginPage';
import SignupPage from 'pages/SignupPage';
import RegisterPage from 'pages/RegisterPage';
=======
import Home from 'pages/home/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DetailPetPage from 'pages/detailPet/DetailPetPage';
import ProfileListPage from 'pages/profileList/ProfileListPage';
import LoginPage from 'pages/login/LoginPage';
import MapPage from 'pages/map/MapPage';
import NewListPage from 'pages/profileList/newList/NewListPage';
import RegisterPage from 'pages/register/RegisterPage';
import ShelterInfoPage from 'pages/shelterInfo/ShelterInfoPage';
import SignupPage from 'pages/signUp/SignupPage';
import UrgentListPage from 'pages/profileList/urgentList/UrgentListPage';
>>>>>>> b0f4d3271796850c516e4fe003a21d0a70a9c185

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pet/:id" element={<DetailPetPage />} />
            <Route path="/profile" element={<ProfileListPage />} />
            <Route path="/shelter/:id" element={<ShelterInfoPage />} />
            <Route path="/profile/urgent/:page" element={<UrgentListPage />} />
            <Route path="/profile/new/:page" element={<NewListPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
