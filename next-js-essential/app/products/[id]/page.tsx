export default async function ProductPage({ params, }: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  console.log(id);

  return (
    <div>
      <h1>Detail Product Page</h1>
    </div>
  )
}