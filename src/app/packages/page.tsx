import CarbonCreditPackages from "@/components/home/CarbonCreditPackagesSection";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer"

export default function PackagesPage() {
  return (
    <main>
        <NavBar/>
        <CarbonCreditPackages id="carbon"/>
        <Footer/>
    </main>
  );
}
