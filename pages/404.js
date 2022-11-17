import Link from "next/link";
import Container from "../components/Container";

export default function FourOhFour() {
  return (
    <>
      <section className="flex items-center h-screen p-16 dark:text-gray-700">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-700">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-700">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link href="/">
              <a
                rel="noopener noreferrer"
                class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-500 dark:text-gray-900"
              >
                Back to homepage
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
