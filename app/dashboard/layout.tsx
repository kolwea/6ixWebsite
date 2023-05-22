'use client';
import { ReactNode } from "react";
import React from "react";
import SixNavigationBar from "../../src/components/SixNavigationBar"

export default function DashboardLayout({ children }: {
    children: ReactNode;
}) {
    return (
        <div>
            <SixNavigationBar />
            {children}
        </div>
    )

}