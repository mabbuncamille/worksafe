type FaqsProps = {
  title: string;
  children: React.ReactNode;
};

export default function Faqs({ title, children }: FaqsProps) {
  return (
    <section className="max-w-4xl mx-auto mb-12">
      <div className="text-white">
        <h3 className="text-xl p-4 font-bold bg-primary">{title}</h3>
        <div className="px-16 py-6 bg-primary-light">{children}</div>
      </div>
    </section>
  );
}
