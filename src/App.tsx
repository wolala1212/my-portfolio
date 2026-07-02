import { type CSSProperties, type PropsWithChildren, useEffect, useRef, useState } from "react";

const HERO_BASE_IMAGE =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=6144&q=100";
const HERO_REVEAL_IMAGE =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=6144&q=100";
const SPOTLIGHT_R = 260;

const marqueeImages = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const decorImages = [
  {
    alt: "",
    className: "left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]",
    delay: 0.1,
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
  },
  {
    alt: "",
    className:
      "bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]",
    delay: 0.25,
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
  },
  {
    alt: "",
    className: "right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]",
    delay: 0.15,
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
  },
  {
    alt: "",
    className:
      "bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]",
    delay: 0.3,
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
  },
];

const services = [
  {
    description:
      "精通界面视觉、版式配色、图标插画，具备成熟审美，能输出高品质商业设计稿。",
    name: "视觉设计能力",
  },
  {
    description:
      "懂用户逻辑，擅长流程规划、页面布局、操作优化，提升产品易用性与使用体验。",
    name: "工具高效能力",
  },
  {
    description:
      "熟练运用Figma AI、Codex、MJ、ChatGPT等AI工具，精通组件库搭建、规范输出、高效协作与前端交付。",
    name: "Motion Design",
  },
  {
    description:
      "擅长搭建统一设计体系，统一产品视觉风格，适配多端页面，把控整体设计规范。",
    name: "设计统筹能力",
  },
  {
    description:
      "懂业务需求，善于沟通对接，会借助 AI 提升设计效率，独立完成全流程设计项目。",
    name: "综合职场能力",
  },
];

const projectCards = [
  {
    category: "Client",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    ],
    name: "Nextlevel Studio",
  },
  {
    category: "Personal",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    ],
    name: "Aura Brand Identity",
  },
  {
    category: "Client",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    ],
    name: "Solaris Digital",
  },
];

function XiaohongshuIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <rect x="4" y="5" width="16" height="14" rx="4" />
      <path d="M8 9.5h8" />
      <path d="M8.5 13h7" />
      <path d="M10 16h4" />
      <path d="M7.5 5.5v-1" />
      <path d="M16.5 5.5v-1" />
    </svg>
  );
}

function BilibiliIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path d="M8 6 6 3.5" />
      <path d="m16 6 2-2.5" />
      <rect x="4" y="7" width="16" height="12" rx="4" />
      <path d="M9 12v2" />
      <path d="M15 12v2" />
      <path d="M10 17h4" />
    </svg>
  );
}

function DouyinIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path d="M13 5v9.25a4 4 0 1 1-3-3.86" />
      <path d="M13 5c1 3.2 3.1 5.1 6 5.5" />
      <path d="M16.5 8.5c.75.65 1.6 1.08 2.5 1.25" />
    </svg>
  );
}

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function useMarqueeOffset(sectionRef: React.RefObject<HTMLElement>) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;
      const top = section.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - top + window.innerHeight) * 0.3);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sectionRef]);

  return offset;
}

function useScrollProgress(targetRef: React.RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const target = targetRef.current;
      if (!target) return;
      const top = target.getBoundingClientRect().top;
      const start = window.innerHeight * 0.8;
      const end = window.innerHeight * 0.2;
      setProgress(clamp((start - top) / (start - end)));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [targetRef]);

  return progress;
}

function useCardScales(cardCount: number) {
  const refs = useRef<Array<HTMLDivElement | null>>([]);
  const [scales, setScales] = useState(Array(cardCount).fill(1));

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScales(
        refs.current.map((node, index) => {
          if (!node) return 1;
          const top = node.getBoundingClientRect().top;
          const progress = clamp((window.innerHeight * 0.25 - top) / window.innerHeight);
          const target = 1 - (cardCount - 1 - index) * 0.03;
          return 1 - (1 - target) * progress;
        }),
      );
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [cardCount]);

  return { refs, scales };
}

function FadeIn({
  children,
  className = "",
  delay = 0,
  x = 0,
  y = 30,
}: PropsWithChildren<{ className?: string; delay?: number; x?: number; y?: number }>) {
  return (
    <div
      className={`fade-in ${className}`}
      style={
        {
          "--fade-delay": `${delay}s`,
          "--fade-x": `${x}px`,
          "--fade-y": `${y}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

function useHeroSpotlight() {
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const tick = () => {
      const dx = mouse.current.x - smooth.current.x;
      const dy = mouse.current.y - smooth.current.y;

      if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
        smooth.current = { ...mouse.current };
        setCursorPos({ ...smooth.current });
        rafRef.current = null;
        return;
      }

      smooth.current.x += dx * 0.1;
      smooth.current.y += dy * 0.1;
      setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      rafRef.current = requestAnimationFrame(tick);
    };

    const startAnimation = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current = { x: event.clientX, y: event.clientY };
      startAnimation();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return cursorPos;
}

function RevealLayer({
  cursorX,
  cursorY,
  image,
}: {
  cursorX: number;
  cursorY: number;
  image: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const revealRef = useRef<HTMLDivElement | null>(null);
  const [canvasSize, setCanvasSize] = useState({ height: 0, width: 0 });

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setCanvasSize({ height: canvas.height, width: canvas.width });
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reveal = revealRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !reveal || !ctx || canvasSize.width === 0 || canvasSize.height === 0) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const gradient = ctx.createRadialGradient(cursorX, cursorY, 0, cursorX, cursorY, SPOTLIGHT_R);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.4, "rgba(255,255,255,1)");
    gradient.addColorStop(0.6, "rgba(255,255,255,0.75)");
    gradient.addColorStop(0.75, "rgba(255,255,255,0.4)");
    gradient.addColorStop(0.88, "rgba(255,255,255,0.12)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, SPOTLIGHT_R, 0, Math.PI * 2);
    ctx.fill();

    const mask = `url("${canvas.toDataURL()}")`;
    reveal.style.setProperty("mask-image", mask);
    reveal.style.setProperty("mask-size", "100% 100%");
    reveal.style.setProperty("-webkit-mask-image", mask);
    reveal.style.setProperty("-webkit-mask-size", "100% 100%");
  }, [canvasSize.height, canvasSize.width, cursorX, cursorY]);

  return (
    <>
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" style={{ display: "none" }} />
      <div
        ref={revealRef}
        className="pointer-events-none absolute inset-0 z-[2] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
    </>
  );
}

function ContactButton() {
  return (
    <a className="contact-button" href="mailto:hello@example.com">
      Contact Me
    </a>
  );
}

function LiveProjectButton() {
  return (
    <a className="live-project-button" href="#contact">
      Live Project
    </a>
  );
}

function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const progress = useScrollProgress(ref);

  return (
    <p
      ref={ref}
      className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
    >
      {Array.from(text).map((character, index) => {
        const start = index / text.length;
        const localProgress = clamp((progress - start) * 3.2);
        return (
          <span
            aria-hidden="true"
            key={`${character}-${index}`}
            style={{ opacity: 0.2 + localProgress * 0.8 }}
          >
            {character === " " ? "\u00A0" : character}
          </span>
        );
      })}
      <span className="sr-only">{text}</span>
    </p>
  );
}

function CurrentHero() {
  const cursorPos = useHeroSpotlight();

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-black" style={{ height: "100dvh" }}>
      <div
        className="hero-zoom absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BASE_IMAGE})` }}
        aria-hidden="true"
      />
      <RevealLayer image={HERO_REVEAL_IMAGE} cursorX={cursorPos.x} cursorY={cursorPos.y} />

      <div
        className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.76))]"
        aria-hidden="true"
      />

      <nav className="relative z-20 px-6 py-6" aria-label="Primary">
        <div className="liquid-glass mx-auto flex w-fit items-center justify-center gap-2 rounded-full px-3 py-2">
          <a
            className="rounded-full px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
            href="#home"
          >
            Home
          </a>
          <a
            className="rounded-full px-5 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            href="#work"
          >
            Work
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="relative z-10 flex flex-1 -translate-y-[20%] flex-col items-center justify-center px-6 py-12 text-center"
      >
        <h1
          className="hero-heading whitespace-nowrap text-[80px] leading-[0.925] tracking-tight text-white drop-shadow-[0_12px_38px_rgba(0,0,0,0.65)] md:text-8xl lg:text-9xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          CRYSTAL&apos;S PORTFOLIO
        </h1>
      </section>

      <footer className="relative z-10 flex justify-center gap-4 pb-12">
        <a
          className="social-icon liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
          href="https://www.xiaohongshu.com/user/profile/595f566b6f02d61788d9d9ff"
          aria-label="Xiaohongshu"
        >
          <XiaohongshuIcon />
        </a>
        <a
          className="social-icon liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
          href="https://space.bilibili.com/186474279?spm_id_from=333.1007.0.0"
          aria-label="Bilibili"
        >
          <BilibiliIcon />
        </a>
        <a
          className="social-icon liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
          href="https://www.douyin.com/user/self?from_tab_name=main"
          aria-label="Douyin"
        >
          <DouyinIcon />
        </a>
      </footer>
    </section>
  );
}

function MarqueeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const offset = useMarqueeOffset(sectionRef);
  const firstRow = marqueeImages.slice(0, 11);
  const secondRow = marqueeImages.slice(11);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="jack-section overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      aria-label="Moving project previews"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow images={firstRow} translate={offset - 200} />
        <MarqueeRow images={secondRow} translate={-(offset - 200)} />
      </div>
    </section>
  );
}

function MarqueeRow({ images, translate }: { images: string[]; translate: number }) {
  return (
    <div
      className="flex w-max gap-3 will-change-transform"
      style={{ transform: `translateX(${translate}px)` }}
    >
      {[...images, ...images, ...images].map((src, index) => (
        <img
          className="h-[190px] w-[296px] rounded-2xl object-cover sm:h-[230px] sm:w-[360px] md:h-[270px] md:w-[420px]"
          src={src}
          alt=""
          loading="lazy"
          key={`${src}-${index}`}
        />
      ))}
    </div>
  );
}

function AboutSection() {
  return (
    <section className="jack-section relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10">
      {decorImages.map((image) => (
        <FadeIn
          className={`pointer-events-none absolute ${image.className}`}
          delay={image.delay}
          x={image.className.includes("left") ? -80 : 80}
          y={0}
          key={image.src}
        >
          <img src={image.src} alt={image.alt} loading="lazy" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn y={40}>
          <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            About me
          </h2>
        </FadeIn>
        <AnimatedText text="I have over 8 years of design experience, specializing in branding, UI, web design, and user experience." />
        <div className="pt-6 sm:pt-8 md:pt-10">
          <ContactButton />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="jack-section rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {services.map((service, index) => (
          <FadeIn delay={index * 0.1} key={service.name}>
            <article className="grid gap-5 border-t border-[#0C0C0C]/15 py-8 last:border-b sm:grid-cols-[0.36fr_0.64fr] sm:py-10 md:py-12">
              <p className="text-[clamp(3rem,10vw,140px)] font-black leading-none">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="self-center">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase">
                  {service.name}
                </h3>
                <p className="mt-4 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">
                  {service.description}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  const { refs, scales } = useCardScales(projectCards.length);

  return (
    <section
      id="projects"
      className="jack-section relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 text-[#D7E2EA] sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-28"
    >
      <FadeIn y={40}>
        <h2 className="hero-heading mb-14 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
          Project
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-6xl">
        {projectCards.map((project, index) => (
          <div
            className="h-[85vh]"
            ref={(node) => {
              refs.current[index] = node;
            }}
            key={project.name}
          >
            <article
              className="sticky rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 transition-transform duration-150 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
              style={{
                top: `calc(6rem + ${index * 28}px)`,
                transform: `scale(${scales[index] ?? 1})`,
              }}
            >
              <div className="grid gap-5 pb-5 md:grid-cols-[0.22fr_0.22fr_1fr_auto] md:items-center">
                <p className="text-[clamp(3rem,10vw,140px)] font-black leading-none">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#D7E2EA]/70">
                  {project.category}
                </p>
                <h3 className="text-[clamp(1.75rem,4vw,4.6rem)] font-black uppercase leading-none">
                  {project.name}
                </h3>
                <LiveProjectButton />
              </div>

              <div className="grid gap-4 lg:grid-cols-[0.4fr_0.6fr]">
                <div className="grid gap-4">
                  <img
                    className="h-[clamp(130px,16vw,230px)] w-full rounded-[32px] object-cover sm:rounded-[42px] md:rounded-[52px]"
                    src={project.images[0]}
                    alt=""
                    loading="lazy"
                  />
                  <img
                    className="h-[clamp(160px,22vw,340px)] w-full rounded-[32px] object-cover sm:rounded-[42px] md:rounded-[52px]"
                    src={project.images[1]}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <img
                  className="h-[clamp(320px,42vw,590px)] w-full rounded-[32px] object-cover sm:rounded-[42px] md:rounded-[52px]"
                  src={project.images[2]}
                  alt=""
                  loading="lazy"
                />
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="overflow-x-clip bg-[#0C0C0C] text-white">
      <CurrentHero />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}

export default App;
