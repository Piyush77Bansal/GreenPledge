import SimpleNavBar from "@/components/layout/SimpleNavBar";
import { Suspense } from "react";
import CompanyDashboard from "@/components/dashboard/CompanyDashboard";

export default function DashboardPage() {
    return (
        <>
            <SimpleNavBar />
            <Suspense fallback={<div>A carregar Dashboard...</div>}>
                <CompanyDashboard />
            </Suspense>
        </>
    );
}
