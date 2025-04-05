import HomePage_TopProducts from "./_children/HomePage_TopProducts";

interface HomePageProps {}

export default function HomePage({}: HomePageProps) {
  return (
    <div className="w-full flex flex-col gap-6 py-6">
      <HomePage_TopProducts />
    </div>
  );
}
