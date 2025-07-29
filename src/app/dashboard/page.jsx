import SimpleNavBar from "@/components/layout/SimpleNavBar";
import { Suspense } from "react";
import CompanyDashboard from "@/components/dashboard/CompanyDashboard";
import Footer from "@/components/layout/Footer";

export default function DashboardPage() {
    return (
        <>
            <SimpleNavBar />
            <Suspense fallback={<div>Loading Dashboard...</div>}>
                <CompanyDashboard />
            </Suspense>
            <Footer />
        </>
    );
}
