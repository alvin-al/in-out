export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-50'>
      {children}
    </div>
  );
}
