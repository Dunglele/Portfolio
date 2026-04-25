import { useState, useEffect, useRef } from "react";

const avatarUrl = "assets/images/my-avatar.png";
const blogImg1 = "https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2Rlcm4lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc3MTEyODY2fDA&ixlib=rb-4.1.0&q=80&w=1080";
const blogImg2 = "https://images.unsplash.com/photo-1573867607131-872f83689352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSSUyMFVYJTIwZGVzaWduJTIwYmxvZyUyMGFydGljbGV8ZW58MXx8fHwxNzc3MTEyODY3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const blogImg3 = "https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzc3MTEyODY3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const serviceImg = "https://images.unsplash.com/photo-1760386129108-d17b9cdfc4fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbG9nbyUyMGRlc2lnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc3NzAxOTE2OHww&ixlib=rb-4.1.0&q=80&w=1080";

const navItems = [
  { label: "Công Cụ", href: "#tools" },
  { label: "Bài Viết", href: "#blog" },
  { label: "Cửa Hàng", href: "#shop" },
  { label: "Liên Lạc", href: "#contact" },
];

const services = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Thiết Kế Web",
    desc: "Xây dựng giao diện website đẹp, hiện đại, tối ưu UX/UI và hiệu suất cao trên mọi thiết bị.",
    tag: "UI/UX",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "App Di Động",
    desc: "Phát triển ứng dụng mobile cross-platform mượt mà, tích hợp API và trải nghiệm native.",
    tag: "Mobile",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Brand Identity",
    desc: "Thiết kế logo, bộ nhận diện thương hiệu chuyên nghiệp, sáng tạo và nhất quán.",
    tag: "Branding",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "SEO & Tối Ưu",
    desc: "Tối ưu hóa công cụ tìm kiếm, tăng thứ hạng Google và cải thiện hiệu suất website.",
    tag: "SEO",
  },
];

const skills = [
  { name: "React / Next.js", level: 92, color: "#6366f1" },
  { name: "TypeScript", level: 85, color: "#8b5cf6" },
  { name: "UI/UX Design", level: 88, color: "#ec4899" },
  { name: "Node.js", level: 78, color: "#06b6d4" },
  { name: "Figma", level: 90, color: "#f59e0b" },
  { name: "Tailwind CSS", level: 95, color: "#10b981" },
];

const tools = [
  { name: "Figma", icon: "🎨", desc: "Thiết kế UI/UX" },
  { name: "VS Code", icon: "💻", desc: "Code Editor" },
  { name: "GitHub", icon: "🐙", desc: "Version Control" },
  { name: "Notion", icon: "📝", desc: "Quản lý dự án" },
  { name: "ChatGPT", icon: "🤖", desc: "AI Assistant" },
  { name: "Vercel", icon: "▲", desc: "Deploy & Hosting" },
];

const posts = [
  {
    img: blogImg1,
    tag: "Design",
    date: "20 Tháng 4, 2026",
    title: "Xu hướng thiết kế Web 2026 bạn không thể bỏ lỡ",
    desc: "Khám phá những xu hướng thiết kế đang định hình tương lai của web: glassmorphism, AI-generated art, và hơn thế nữa.",
  },
  {
    img: blogImg2,
    tag: "UI/UX",
    date: "12 Tháng 4, 2026",
    title: "Bí quyết thiết kế UX khiến người dùng không thể rời mắt",
    desc: "Các nguyên tắc tâm lý học màu sắc và hành vi người dùng áp dụng vào thiết kế sản phẩm thực tế.",
  },
  {
    img: blogImg3,
    tag: "Dev",
    date: "5 Tháng 4, 2026",
    title: "React 19 — Những tính năng thay đổi cách bạn code",
    desc: "Deep dive vào các tính năng mới của React 19: Server Components, Actions, và cải tiến hiệu suất vượt trội.",
  },
];

const tagColors: Record<string, string> = {
  "UI/UX": "bg-violet-100 text-violet-600",
  Mobile: "bg-cyan-100 text-cyan-600",
  Branding: "bg-pink-100 text-pink-600",
  SEO: "bg-emerald-100 text-emerald-600",
  Design: "bg-indigo-100 text-indigo-600",
  Dev: "bg-orange-100 text-orange-600",
};

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 200);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 text-sm">{name}</span>
        <span className="text-sm" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, background: `linear-gradient(90deg, ${color}88, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img src={avatarUrl} alt="Logo" className="w-10 h-10 rounded-lg object-cover" />
            <span className="text-gray-900 tracking-tight select-none">qdungdev<span className="text-indigo-500">.</span>id<span className="text-indigo-500">.</span>vn</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="px-4 py-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 text-sm"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="ml-3 px-5 py-2 rounded-lg bg-gray-900 text-white text-sm hover:bg-indigo-600 transition-colors duration-200"
            >
              Thuê tôi →
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`w-5 h-0.5 bg-gray-700 mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`w-5 h-0.5 bg-gray-700 mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 bg-gray-700 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="block w-full text-left px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-violet-50 rounded-full blur-3xl opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-50 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center relative">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Sẵn sàng nhận dự án mới
            </div>
            <h1 className="mb-4 text-gray-900" style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", lineHeight: 1.15, fontWeight: 700, letterSpacing: "-0.02em" }}>
              Xin chào, mình là<br />
              <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                Quang Dũng
              </span>
            </h1>
            <p className="text-gray-500 mb-8 max-w-md" style={{ lineHeight: 1.8 }}>
              Full-stack Developer & UI/UX Designer với hơn 4 năm kinh nghiệm. Mình tạo ra những sản phẩm số đẹp, mượt mà và có ý nghĩa thực sự với người dùng.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => scrollTo("#contact")}
                className="px-6 py-3 rounded-xl bg-gray-900 text-white text-sm hover:bg-indigo-600 transition-colors duration-200 flex items-center gap-2"
              >
                Liên hệ với mình
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => scrollTo("#blog")}
                className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200"
              >
                Xem bài viết
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-xs">Kết nối với mình</span>
              <div className="w-8 h-px bg-gray-200" />
              {[
                {
                  name: "GitHub",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  name: "Twitter",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  name: "Dribbble",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.logout c.234-.43 3.177-5.48 8.452-7.187.27-.09.54-.17.81-.24-.17-.388-.35-.782-.53-1.17C7.6 11.723 2.7 11.603 2.28 11.595c-.038.13-.05.26-.05.4 0 2.507.952 4.79 2.507 6.494l.003-.044zm-2.396-7.74c.438.01 4.765.108 9.158-1.19C9.35 6.99 7.783 5.08 7.552 4.788c-2.396 1.133-4.22 3.224-4.88 5.76zm7.28-7.07c.264.333 1.856 2.23 3.647 5.112 3.472-1.303 4.934-3.274 5.107-3.52-1.723-1.534-4.0-2.467-6.497-2.467-.77 0-1.52.1-2.258.275z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200"
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div className="relative flex justify-center md:justify-end">
            <div 
              className="relative group cursor-pointer"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${-y / 20}deg) rotateY(${x / 20}deg) scale(1.02)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
              }}
              style={{ transition: "transform 0.2s ease-out" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-3xl blur-2xl opacity-20 scale-110" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Kinh nghiệm</p>
                  <p className="text-sm text-gray-800">4+ năm</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Khách hàng</p>
                  <p className="text-sm text-gray-800">50+ dự án</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400">Cuộn xuống</span>
          <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-indigo-500 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-indigo-500 text-xs tracking-widest uppercase mb-3 block">Dịch vụ</span>
            <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Mình có thể giúp gì cho bạn?
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto" style={{ lineHeight: 1.8 }}>
              Từ ý tưởng đến sản phẩm hoàn chỉnh, mình đồng hành cùng bạn trong từng bước xây dựng.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-indigo-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-indigo-50 flex items-center justify-center text-gray-500 group-hover:text-indigo-600 mb-5 transition-colors duration-200">
                  {s.icon}
                </div>
                <span className={`text-xs px-2 py-1 rounded-md ${tagColors[s.tag] || "bg-gray-100 text-gray-500"} mb-3 inline-block`}>
                  {s.tag}
                </span>
                <h3 className="text-gray-800 mb-2" style={{ fontWeight: 600 }}>{s.title}</h3>
                <p className="text-gray-500 text-sm" style={{ lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* service image banner */}
          <div className="mt-12 rounded-3xl overflow-hidden relative h-52 md:h-64">
            <img src={serviceImg} alt="Service" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-indigo-900/60 flex items-center px-10">
              <div>
                <p className="text-white/70 text-sm mb-2">Bắt đầu ngay hôm nay</p>
                <p className="text-white mb-4" style={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.3 }}>
                  Biến ý tưởng của bạn thành<br />sản phẩm thực tế
                </p>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="px-5 py-2.5 bg-white text-gray-900 rounded-xl text-sm hover:bg-indigo-50 transition-colors duration-200"
                  style={{ fontWeight: 500 }}
                >
                  Tư vấn miễn phí →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-indigo-500 text-xs tracking-widest uppercase mb-3 block">Kỹ năng</span>
              <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                Bộ kỹ năng của mình
              </h2>
              <p className="text-gray-500 mb-10" style={{ lineHeight: 1.8 }}>
                Mình không ngừng học hỏi và cập nhật các công nghệ mới nhất để mang lại sản phẩm tốt nhất cho khách hàng.
              </p>
              {skills.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>

            {/* Tools section */}
            <div id="tools">
              <span className="text-violet-500 text-xs tracking-widest uppercase mb-3 block">Công cụ</span>
              <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                Công cụ mình sử dụng
              </h2>
              <p className="text-gray-500 mb-8" style={{ lineHeight: 1.8 }}>
                Những công cụ giúp mình làm việc hiệu quả và sáng tạo mỗi ngày.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((t, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center text-center hover:bg-indigo-50 hover:scale-105 transition-all duration-200 cursor-pointer group border border-transparent hover:border-indigo-100"
                  >
                    <span className="text-3xl mb-2">{t.icon}</span>
                    <span className="text-sm text-gray-800 group-hover:text-indigo-700" style={{ fontWeight: 600 }}>{t.name}</span>
                    <span className="text-xs text-gray-400 mt-0.5">{t.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-indigo-500 text-xs tracking-widest uppercase mb-3 block">Blog</span>
              <h2 className="text-gray-900" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                Bài viết mới nhất
              </h2>
            </div>
            <a href="#" className="text-indigo-500 text-sm hover:text-indigo-700 transition-colors flex items-center gap-1 shrink-0">
              Xem tất cả
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full ${tagColors[p.tag] || "bg-gray-100 text-gray-500"}`}>
                      {p.tag}
                    </span>
                    <span className="text-xs text-gray-400">{p.date}</span>
                  </div>
                  <h3 className="text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-200" style={{ fontWeight: 600, lineHeight: 1.4 }}>
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm" style={{ lineHeight: 1.7 }}>{p.desc}</p>
                  <div className="mt-4 flex items-center text-indigo-500 text-sm gap-1 group-hover:gap-2 transition-all duration-200">
                    Đọc thêm
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOP ── */}
      <section id="shop" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-indigo-500 text-xs tracking-widest uppercase mb-3 block">Cửa Hàng</span>
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Tài nguyên & Template
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-12" style={{ lineHeight: 1.8 }}>
            Khám phá bộ sưu tập template, UI kit và tài nguyên thiết kế giúp bạn xây dựng sản phẩm nhanh hơn.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: "Portfolio Template", price: "Miễn phí", tag: "🎁", desc: "Template portfolio cá nhân đẹp, hiện đại dùng React + Tailwind.", color: "from-indigo-50 to-violet-50", border: "border-indigo-100" },
              { name: "UI Component Kit", price: "199.000đ", tag: "⭐", desc: "Bộ 120+ component Figma chuẩn design system, dễ customize.", color: "from-pink-50 to-rose-50", border: "border-pink-100" },
              { name: "SEO Checklist", price: "49.000đ", tag: "🚀", desc: "Checklist SEO đầy đủ cho developer & marketer tối ưu web.", color: "from-emerald-50 to-teal-50", border: "border-emerald-100" },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl bg-gradient-to-br ${item.color} p-6 border ${item.border} text-left hover:shadow-md transition-all duration-200 hover:-translate-y-1 cursor-pointer group`}>
                <span className="text-3xl mb-4 block">{item.tag}</span>
                <h3 className="text-gray-800 mb-2" style={{ fontWeight: 600 }}>{item.name}</h3>
                <p className="text-gray-500 text-sm mb-4" style={{ lineHeight: 1.7 }}>{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900" style={{ fontWeight: 700 }}>{item.price}</span>
                  <button className="px-4 py-2 bg-gray-900 text-white text-xs rounded-lg hover:bg-indigo-600 transition-colors duration-200">
                    Mua ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-indigo-950 to-violet-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500 rounded-full blur-3xl opacity-10" />
        </div>
        <div className="max-w-2xl mx-auto px-6 text-center relative">
          <span className="text-indigo-400 text-xs tracking-widest uppercase mb-3 block">Liên Lạc</span>
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Bắt đầu dự án của bạn
          </h2>
          <p className="text-gray-400 mb-10" style={{ lineHeight: 1.8 }}>
            Dù bạn đang có ý tưởng hay cần tư vấn, hãy nhắn tin cho mình. Mình luôn sẵn lòng lắng nghe.
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-left">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-gray-400 text-xs block mb-1.5">Họ và tên</label>
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="w-full bg-white/10 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm border border-white/10 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs block mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full bg-white/10 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm border border-white/10 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="text-gray-400 text-xs block mb-1.5">Dịch vụ quan tâm</label>
              <select className="w-full bg-white/10 text-gray-300 rounded-xl px-4 py-3 text-sm border border-white/10 focus:border-indigo-500 focus:outline-none transition-colors">
                <option value="" className="bg-gray-900">Chọn dịch vụ...</option>
                <option value="web" className="bg-gray-900">Thiết kế Web</option>
                <option value="app" className="bg-gray-900">App Di Động</option>
                <option value="brand" className="bg-gray-900">Brand Identity</option>
                <option value="seo" className="bg-gray-900">SEO & Tối Ưu</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="text-gray-400 text-xs block mb-1.5">Tin nhắn</label>
              <textarea
                rows={4}
                placeholder="Mô tả dự án của bạn..."
                className="w-full bg-white/10 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm border border-white/10 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
              />
            </div>
            <button className="w-full py-3.5 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-xl text-sm hover:from-indigo-600 hover:to-violet-700 transition-all duration-200 flex items-center justify-center gap-2" style={{ fontWeight: 500 }}>
              Gửi tin nhắn
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
            {[
              { icon: "📧", text: "info@qdungdev.id.vn" },
              { icon: "📍", text: "Quận 3, HCMC, Việt Nam" },
              { icon: "⏰", text: "Phản hồi trong 24h" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                <span>{c.icon}</span>
                <span>{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-950 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-2 group">
              <img src={avatarUrl} alt="Logo" className="w-10 h-10 rounded-lg object-cover" />
              <span className="text-white-900 tracking-tight select-none">qdungdev<span className="text-indigo-500">.</span>id<span className="text-indigo-500">.</span>vn</span>
            </a>
          </div>
          <p className="text-xs text-center">
            © 2026 Quang Dũng. Thiết kế với React & Tailwind CSS.
          </p>
          <div className="flex gap-4 text-xs">
            {navItems.map((n) => (
              <button
                key={n.label}
                onClick={() => scrollTo(n.href)}
                className="hover:text-white transition-colors"
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
