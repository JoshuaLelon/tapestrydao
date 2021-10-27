import Container from '../components/Container';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              TapestryDAO
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              A tool and community for people with{' '}
              <span className="font-semibold">intense, but fleeting</span>{' '}
              interests and attention spans.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Sign up if you want to use your reddit or tik tok time to learn
              useful things.
            </p>
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Some placeholder text.
        </h3>
      </div>
    </Container>
  );
}
