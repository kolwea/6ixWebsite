'use client';
import { ReactNode } from "react";
import React from "react";
import SixNavigationBar from "../../components/SixNavigationBar"

export default function DashboardLayout({ children }: {
    children: ReactNode;
}) {
    return (
        <div className="pageWrapper">
            <SixNavigationBar />
            {children}
        </div>
    )

}