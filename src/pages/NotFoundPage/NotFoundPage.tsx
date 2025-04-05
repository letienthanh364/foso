import { Link } from "react-router-dom";
import mainPath from "../../constants/path";

export default function NotFoundPage() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-9xl font-extrabold tracking-widest text-blue-light">
        404
      </h1>
      <div className="absolute rotate-12 rounded bg-white px-2 text-sm  text-red-600">
        Page not found
      </div>
      <button className="mt-5">
        <Link
          to={mainPath.home}
          className="group relative inline-block text-sm font-medium focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

          <span className="relative block rounded-md border border-current bg-blue-light text-white px-8 py-3">
            <span title="not-found-page">Go home</span>
          </span>
        </Link>
      </button>
    </main>
  );
}
