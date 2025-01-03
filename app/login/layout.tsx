export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html>
        <body className='flex justify-center'>{children}</body>
      </html>
    </>
  );
}
