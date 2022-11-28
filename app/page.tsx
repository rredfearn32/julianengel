import { Border } from '../components/Border';
import { Heading } from '../components/Heading';
import './home.scss';

export default function RootPage() {
  return (
    <>
      <section
        id="hero_home"
        className="flex h-screen w-screen items-center justify-center"
      >
        <div className="ml-96 w-96">
          <Heading level="h1" text="Julian Engel" classNames="text-white" />
          <div className="my-4">
            <Border color="bg-[#aaaaaa]" />
          </div>
          <p className="text-2xl text-white">
            Combating environmental crimes at sea.
          </p>
        </div>
      </section>
      <section className="flex h-[1140px] items-center justify-center">
        <div
          id="circle_home"
          className="flex h-[960px] w-[960px] items-center justify-center"
        >
          <div className="max-w-[350px] text-center">
            <Heading level="h2" text="Mission" classNames="text-ocean" />
            <div className="my-2">
              <Border color="bg-[#aaaaaa]" />
            </div>
            <p>
              Holistic approaches for multi-stakeholder resource managment and
              conservation of life on land and below water.
            </p>
            <a href="https://google.com">Get in touch</a>
          </div>
        </div>
      </section>
    </>
  );
}
