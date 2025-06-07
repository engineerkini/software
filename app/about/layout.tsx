import Header from '../components/layout/Header';
// import LoadingBar from '../components/LoadingBar';


export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <> 
       {/* <LoadingBar /> */}
        <Header />  
        <main className="">{children}</main>
 
  </>
  );
}
