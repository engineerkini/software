
import React from 'react';
import Header from '../components/layout/Header';


export default function TalentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Header />  
        <main className="p-4">{children}</main>
 
  </>
  );
}
