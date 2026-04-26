import { useState, useEffect, useRef } from "react";
import avatarUrl from "../assets/images/my-avatar.png";
import project1 from "../assets/images/traffic.jpg";
import project2 from "../assets/images/5theway.jpg";
import project3 from "../assets/images/calo.jpg";


const blogImg1 = "https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2Rlcm4lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc3MTEyODY2fDA&ixlib=rb-4.1.0&q=80&w=1080";
const blogImg2 = "https://images.unsplash.com/photo-1573867607131-872f83689352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSSUyMFVYJTIwZGVzaWduJTIwYmxvZyUyMGFydGljbGV8ZW58MXx8fHwxNzc3MTEyODY3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const blogImg3 = "https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzc3MTEyODY3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const serviceImg = "https://images.unsplash.com/photo-1760386129108-d17b9cdfc4fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbG9nbyUyMGRlc2lnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc3NzAxOTE2OHww&ixlib=rb-4.1.0&q=80&w=1080";
const github = "https://github.com/Dunglele";
const linkedin = "https://www.linkedin.com/in/ldqquang-dung/";
const x = "https://x.com/dungle9386?s=21";
const instagram = "https://instagram.com/_qdungg.39";

const navItems = [
  { label: "Dự án", href: "#project" },
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
    title: "Thiết Kế Hệ Thống",
    desc: "Thiết kế hệ thống, vẽ các sơ đồ SRS trực quan để chuyển giao cho Dev chuẩn nhất.",
    tag: "Business Analytics",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Backend",
    desc: "Thiết kế các chức năng, liên kết Database với FE. Xây dựng API đầy đủ, bảo mật.",
    tag: "Dev",
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

const projects = [
  {
    img: project1,
    href: "https://github.com/Dunglele/Model_AITRAFFIC",
    tag: "Model AI",
    date: "20 Tháng 4, 2026",
    title: "Deep Learning - Hệ thống phân tích giao thông tại HCMC",
    desc: "Đưa ra hướng giải quyết vấn đề nan giải của TP.Hồ Chí Minh trong nhiều năm qua, bộ dữ liệu đặc biệt tự train mô hình Yolov11.",
  },
  {
    img: project2,
    href: "https://github.com/Dunglele/5Theway",
    tag: "Ecommerce",
    date: "12 Tháng 4, 2026",
    title: "Remake - Cửa hàng thời trang Streetwear 5Theway",
    desc: "Thiết kế hệ thống, UI/UX cho thương hiệu thời trang 5Theway. Triển khai với công nghệ Springboot & Java, HTML/CSS JS và Bootstrap5.",
  },
  {
    img: project3,
    href: "https://github.com/Dunglele",
    tag: "Health",
    date: "5 Tháng 4, 2026",
    title: "CaloViet - Ứng dụng cải thiện cân nặng thông minh",
    desc: "Ứng dụng học sâu trong nhận diện món ăn. Đảm bảo mang lại hiệu quả cho các kế hoạch tăng / giảm cân nặng của người dùng.",
  },
];

const tagColors: Record<string, string> = {
  "UI/UX": "bg-violet-100 text-violet-600",
  Mobile: "bg-cyan-100 text-cyan-600",
  Branding: "bg-pink-100 text-pink-600",
  SEO: "bg-emerald-100 text-emerald-600",
  Design: "bg-indigo-100 text-indigo-600",
  Dev: "bg-orange-100 text-orange-600",
  "Model AI": "bg-blue-100 text-blue-600",
  Ecommerce: "bg-amber-100 text-amber-600",
  Health: "bg-rose-100 text-rose-600",
  "Business Analytics": "bg-teal-100 text-teal-600",
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

const skillIcons = [
  { name: ".NET", icon: "https://img.icons8.com/?size=160&id=1hX8jwYkynSh&format=png" },
  { name: "Springboot", icon: "https://img.icons8.com/?size=96&id=90519&format=png" },
  { name: "Django", icon: "https://img.icons8.com/?size=100&id=mUBILbYvUMq8&format=png" },
  { name: "C#", icon: "https://img.icons8.com/?size=128&id=Fycm8TUhWmFU&format=png" },
  { name: "Python", icon: "https://img.icons8.com/?size=96&id=13441&format=png" },
  { name: "Java", icon: "https://img.icons8.com/?size=160&id=lTKW3iI3wIT0&format=png" },
  { name: "Figma", icon: "https://img.icons8.com/?size=96&id=zfHRZ6i1Wg0U&format=png" },
  { name: "Notion", icon: "https://img.icons8.com/?size=128&id=wue74HqaylSJ&format=png" },
  { name: "Git", icon: "https://img.icons8.com/?size=96&id=20906&format=png" },
  { name: "Linux", icon: "https://img.icons8.com/?size=160&id=m6O2bFdG70gw&format=png" },
  { name: "HTML/CSS", icon: "https://img.icons8.com/?size=96&id=20909&format=png" },
  { name: "JS", icon: "https://img.icons8.com/?size=96&id=108784&format=png" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Liên hệ từ Portfolio: ${formData.service || "Dự án mới"}`);
    const body = encodeURIComponent(`Họ tên: ${formData.name}\nEmail: ${formData.email}\nDịch vụ: ${formData.service}\n\nTin nhắn:\n${formData.message}`);
    window.location.href = `mailto:ldqdung@outlook.com?subject=${subject}&body=${body}`;
  };

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

        <div className="max-w-6xl mx-auto px-6 pt-10 pb-36 md:py-20 grid md:grid-cols-2 gap-16 items-center relative">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-xs mb-6 animate-float">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Sẵn sàng được nhận làm Intern
            </div>
            <h1 className="mb-4 text-gray-900" style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", lineHeight: 1.15, fontWeight: 700, letterSpacing: "-0.02em" }}>
              Xin chào, mình là<br />
              <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                Quang Dũng
              </span>
            </h1>
            <p className="text-gray-500 mb-8 max-w-md" style={{ lineHeight: 1.8 }}>
              Intern Backend Developer & BA biết UX/UI Designer với vài năm kinh nghiệm. Mình tạo ra những sản phẩm số đẹp, mượt mà và có ý nghĩa thực sự với người dùng.
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
                  href: github,
                  icon: (
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  name: "X",
                  href: x,
                  icon: (
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  href: linkedin,
                  icon: (
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  href: instagram,
                  icon: (
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  <p className="text-sm text-gray-800">Sẵn sàng học hỏi</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Project</p>
                  <p className="text-sm text-gray-800">15+ dự án</p>
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

      {/* ── PROJECT ── */}
      <section id="project" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-indigo-500 text-xs tracking-widest uppercase mb-3 block">Dự án</span>
              <h2 className="text-gray-900" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                Các dự án mình đã thực hiện
              </h2>
            </div>
            <a href="https://github.com/Dunglele?tab=repositories" target="_blank" className="text-indigo-500 text-sm hover:text-indigo-700 transition-colors flex items-center gap-1 shrink-0">
              Xem tất cả
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide">
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[85%] md:min-w-0 bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer snap-center block"
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
                  
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILL ── */}
      <section id="skill" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-indigo-500 text-xs tracking-widest uppercase mb-3 block">Kỹ năng</span>
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Một ít skill của mình
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-12" style={{ lineHeight: 1.8 }}>
            Khám phá bộ sưu tập kỹ năng mà đa số mình có là kiến thức trong 4 năm đại học.
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto">
            {skillIcons.map((skill, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-2 md:p-4 bg-white shadow-sm rounded-xl md:rounded-2xl hover:scale-105 transition-transform duration-300 border border-gray-50 aspect-square">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-2xl flex items-center justify-center mb-2 md:mb-3 overflow-hidden">
                  {skill.icon && skill.icon !== "#" ? (
                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-indigo-400 text-[8px] md:text-[10px] font-bold uppercase">Dev</span>
                  )}
                </div>
                <p className="text-[10px] md:text-sm font-semibold text-gray-700 text-center px-0.5 leading-tight">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" className="py-24 bg-white">
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

          <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-6 lg:pb-0 snap-x snap-mandatory scrollbar-hide">
            {posts.map((p, i) => (
              <article
                key={i}
                className="min-w-[85%] lg:min-w-0 bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer snap-center"
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
      <section id="shop" className="py-24 bg-gray-50">
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
                {/* <span className="text-3xl mb-4 block">{item.tag}</span> */}
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
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/10 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm border border-white/10 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs block mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/10 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm border border-white/10 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="text-gray-400 text-xs block mb-1.5">Chủ đề quan tâm</label>
              <select 
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-white/10 text-gray-300 rounded-xl px-4 py-3 text-sm border border-white/10 focus:border-indigo-500 focus:outline-none transition-colors"
              >
                <option value="" className="bg-gray-900">Chọn chủ đề...</option>
                <option value="web" className="bg-gray-900">Thiết kế Web</option>
                <option value="app" className="bg-gray-900">App Di Động</option>
                <option value="brand" className="bg-gray-900">Brand Identity</option>
                <option value="seo" className="bg-gray-900">SEO & Tối Ưu</option>
                <option value="ba" className="bg-gray-900">Thiết kế hệ thống</option>
                <option value="hr" className="bg-gray-900">Tuyển dụng</option>

              </select>
            </div>
            <div className="mb-6">
              <label className="text-gray-400 text-xs block mb-1.5">Tin nhắn</label>
              <textarea
                rows={4}
                placeholder="Mô tả dự án của bạn..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/10 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm border border-white/10 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
              />
            </div>
            <button 
              onClick={handleSendEmail}
              className="w-full py-3.5 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-xl text-sm hover:from-indigo-600 hover:to-violet-700 transition-all duration-200 flex items-center justify-center gap-2" 
              style={{ fontWeight: 500 }}
            >
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
              {/* <img src={avatarUrl} alt="Logo" className="w-10 h-10 rounded-lg object-cover" />
              <span className="text-white-900 tracking-tight select-none">qdungdev<span className="text-indigo-500">.</span>id<span className="text-indigo-500">.</span>vn</span> */}
            </a>
          </div>
          <p className="text-xs text-center">
            © 2026 Lê Đỗ Quang Dũng. Portfolio thiết kế với React & Tailwind CSS.
          </p>
          <div className="flex gap-4 text-xs">
            {/* {navItems.map((n) => (
              <button
                key={n.label}
                onClick={() => scrollTo(n.href)}
                className="hover:text-white transition-colors"
              >
                {n.label}
              </button>
            ))} */}
          </div>
        </div>
      </footer>
    </div>
  );
}
