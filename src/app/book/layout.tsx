import Navbar from "@/components/Navbar";

export const metadata = {
 title: 'Books',
 description: 'List of books',
};

export default function BookLayou({ children }: {children: React.ReactNode;}) {
  return (
    <>
        <Navbar/>
        <div className="p-3 m-3">
            {children}
        </div>
        
    </>
  );
}