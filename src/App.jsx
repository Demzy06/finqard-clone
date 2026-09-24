import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/homepage/HomePage";
import SellGiftCard from "./features/sellGiftCards/SellGiftCard";
import VirtualDollarCard from "./features/vdc/VirtualDollarCard";
import BillPayment from "./features/billPayment/BillPayment";
import VirtualBankAccount from "./features/virtualBankAccount/VirtualBankAccount";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/features/sell-giftcards" element={<SellGiftCard />} />
        <Route path="/features/vdc" element={<VirtualDollarCard />} />
        <Route path="/features/pay-bills" element={<BillPayment />} />
        <Route path="/features/top-up" element={<VirtualBankAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
