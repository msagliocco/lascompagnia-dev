const NewsletterSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-pitch-black translate-x-3 translate-y-3 border-2 border-pitch-black"></div>
          <div className="absolute inset-0 bg-neon-pink translate-x-1.5 translate-y-1.5 border-2 border-pitch-black"></div>

          <div className="relative bg-off-white border-4 border-pitch-black p-8 text-center">
            <div className="absolute -top-4 -right-4 rotate-12">
              <div className="stamp-mark px-3 py-1 text-sm">NEWS</div>
            </div>

            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-pitch-black mb-2">
              Resta
            </h3>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-pitch-black mb-6">
              <span className="inline-block bg-neon-lime text-pitch-black px-2 border-2 border-pitch-black shadow-[2px_2px_0px_0px_#15130f]">
                Aggiornato
              </span>
            </h3>

            <p className="font-mono text-sm uppercase tracking-[0.2em] text-gray-700 mb-8 border-t-2 border-b-2 border-dashed border-pitch-black/30 py-4">
              Non perdere le novità, iscriviti alla newsletter!
            </p>

            <a
              href="https://2bc6204c.sibforms.com/serve/MUIFAAdp42exZq-2IxRY-VoqtlkKnBibUpWXTPoh1FUuIvyMZWzod0KfjIQR9I3JXDDgTPYCaQICEzO1EOzGUfFIMwsAwFJgq1DIQ0wNyO1n3g_GDeFP9MsFNs2K9tSM5XAYgQEmox7DNhFN9mQOnqICMJmYkw1CBDdFS4Yhhc7H3wGgR77o89N0ZHVR_UyIHuukfP7ov4Hg76KR"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn text-lg inline-block"
            >
              Iscriviti Subito →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
