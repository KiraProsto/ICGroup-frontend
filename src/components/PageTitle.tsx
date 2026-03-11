interface IPageTitleProps {
  title: string;
}

export default function PageTitle({ title }: IPageTitleProps) {
  return (
    <section className="pt-12 px-5 bg-gray-0">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-semibold">
          <span className="text-main-3">IC</span>
          {title}
        </h1>
      </div>
    </section>
  );
}
