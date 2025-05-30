import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./assets/Pages/Home";
import Header from "./assets/components/Header";
import Login from "./assets/Pages/Login";
import AOS from "aos";

// CSS
import "aos/dist/aos.css";
import "react-bootstrap";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap/css/bootstrap-grid.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./App.css";


import SignUp from "./assets/Pages/SignUp";
import ForgetPassword from "./assets/components/ForgetPassword";
import InfoGenbi from "./assets/components/InfoGenbi";
import InfoKIPKuliah from "./assets/components/infoKIPKuliah";
import ManajemenBeasiswa from "./assets/Pages/Admin/ManajemenBeasiswa";
import AddBeasiswa from "./assets/Pages/Admin/ManajemenBeasiswa/AddBeasiswa";
import CreatePassword from "./assets/Pages/SignUp/CreatePassword";
import LoginComplete from "./assets/Pages/SignUp/LoginComplete";
import Dashboard from "./assets/Pages/Mahasiswa/Dashboard";
import Mahasiswa from "./assets/Pages/Admin/PengolahanPengguna/Mahasiswa";
import DashboardBidangKemahasiswaan from "./assets/Pages/Bidang Kemahasiswaan/Dashboard";
import DashboardAdmin from "./assets/Pages/Admin/Dashboard";
import DaftarPendaftar from "./assets/Pages/Admin/DaftarPendfartar";
import Pengumuman from "./assets/Pages/Admin/Pengumuman";
import BidangKemahasiswaan from "./assets/Pages/Admin/PengolahanPengguna/BidangKemahasiswaan";
import AddPengumuman from "./assets/Pages/Admin/Pengumuman/AddPengumuman";
import LaporanStatistik from "./assets/Pages/Admin/LaporanStatistik";
import InformasiBeasiswa from "./assets/Pages/Bidang Kemahasiswaan/InformasiBeasiswa";
import AddBeasiswaBK from "./assets/Pages/Bidang Kemahasiswaan/InformasiBeasiswa/AddBeasiswa";
import AnnouncementBK from "./assets/Pages/Bidang Kemahasiswaan/Pengumuman";
import InformasiPendaftar from "./assets/Pages/Bidang Kemahasiswaan/InformasiPendaftar";
import DataPendaftar from "./assets/Pages/Bidang Kemahasiswaan/InformasiPendaftar/DataPendaftar";
import ValidasiAndCheck from "./assets/Pages/Bidang Kemahasiswaan/InformasiPendaftar/ValidasiAndCheck.jsx";
import Profile from "./assets/Pages/Mahasiswa/Profile/index.jsx";
import Status from "./assets/Pages/Mahasiswa/Status/index.jsx";
import { AuthProvider } from "./assets/context/AuthContext.jsx";
import ForgotPasswordDone from "./assets/components/ForgetPasswordDone/index.jsx";
import FormPendaftaranGenBI from "./assets/Pages/Beasiswa/GenBI/FormPendaftaran/index.jsx";
import FormPendaftaranDocumentGenBI from "./assets/Pages/Beasiswa/GenBI/FormPendaftaranDocumen.jsx/index.jsx";
import FormPendaftaranKip from "./assets/Pages/Beasiswa/KIPKuliah/FormPendaftaran/index.jsx";
import FormPendaftaranDocumentKip from "./assets/Pages/Beasiswa/KIPKuliah/FormPendaftaranDocumen.jsx/index.jsx";


// Komponen Layout Wrapper
function Layout() {
  const location = useLocation();
  const hideHeaderPaths = ["/login", "/signup", "/create-password/:token", "/forget-password", "/forget-password/done", "/signup/login-complete",
    "/bidang-dashboard", "/admin/pengolahan-pengguna/mahasiswa", "/admin/pengolahan-pengguna/bidang-kemahasiswaan", "/admin/pengumuman", "/admin/pengumuman/add",
    "/admin/dashboard", "/admin/manajemen-beasiswa", "/admin/manajemen-beasiswa/add", "/admin/daftar-pendaftar", "/admin/laporan-statistik", "/bidang/informasi-beasiswa",
    "/bidang/informasi-beasiswa/add", "/bidang/announcement", "/bidang/informasi-pendaftar", "/bidang/informasi-pendaftar/data-pendaftar", "/bidang/informasi-pendaftar/data-pendaftar/validation-and-check",
    "/mahasiswa/dashboard", "/mahasiswa/profile" ]; // Tambahkan path di mana Header disembunyikan

  return (
    <>
    
      {!hideHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />

        <Route path="/beasiswa/genbi/form-pendaftaran" element={<FormPendaftaranGenBI />} />
        <Route path="/beasiswa/genbi/form-pendaftaran/document" element={<FormPendaftaranDocumentGenBI />} />

        <Route path="/beasiswa/kip/form-pendaftaran" element={<FormPendaftaranKip />} />
        <Route path="/beasiswa/kip/form-pendaftaran/document" element={<FormPendaftaranDocumentKip />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/create-password/:token" element={<CreatePassword />} />
        <Route path="/create-password/berhasil/:token" element={<LoginComplete />} />

        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/forget-password/done" element={<ForgotPasswordDone />} />
        <Route path="/home" element={<Home />} />
        <Route path="/beasiswa/genbi" element={<InfoGenbi />} />
        <Route path="/beasiswa/kip" element={<InfoKIPKuliah />}/>

        <Route path="/bidang-dashboard" element={<DashboardBidangKemahasiswaan />} />
        <Route path="/bidang/informasi-beasiswa" element={<InformasiBeasiswa />} />
        <Route path="/bidang/informasi-beasiswa/add" element={<AddBeasiswaBK />} />
        <Route path="/bidang/announcement" element={<AnnouncementBK />} />
        <Route path="/bidang/informasi-pendaftar" element={<InformasiPendaftar />} />
        <Route path="/bidang/informasi-pendaftar/data-pendaftar" element={<DataPendaftar />} />
        <Route path="/bidang/informasi-pendaftar/data-pendaftar/validation-and-check" element={<ValidasiAndCheck />} />

        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/admin/manajemen-beasiswa" element={<ManajemenBeasiswa />} />
        <Route path="/admin/manajemen-beasiswa/add" element={<AddBeasiswa />} />
        <Route path="/admin/daftar-pendaftar" element={<DaftarPendaftar />} />
        <Route path="/admin/pengolahan-pengguna/mahasiswa" element={<Mahasiswa />} />
        <Route path="/admin/pengolahan-pengguna/bidang-kemahasiswaan" element={<BidangKemahasiswaan />} />
        <Route path="/admin/pengumuman" element={<Pengumuman />} />
        <Route path="/admin/pengumuman/add" element={<AddPengumuman />} />
        <Route path="/admin/laporan-statistik" element={<LaporanStatistik />} />

        <Route path="/mahasiswa/dashboard" element={<Dashboard />} />
        <Route path="/mahasiswa/profile" element={<Profile />} />
        <Route path="/mahasiswa/status" element={<Status />} />
        
      </Routes>
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
