import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen w-full relative bg-white dark:bg-[#000000]">
      {/* Purple Glow Top - Light Mode Only */}
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          background: "#ffffff",
          backgroundImage: `
                        radial-gradient(
                            circle at top center,
                            rgba(173, 109, 244, 0.5),
                            transparent 70%
                        )
                    `,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Lines Pattern - Light Mode Only */}
      <div
        className="absolute inset-0 z-0 pointer-events-none dark:hidden"
        style={{
          backgroundImage: `
                        repeating-linear-gradient(0deg, rgba(0,0,0,0.02) 0, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 40px),
                        repeating-linear-gradient(45deg, rgba(173,109,244,0.04) 0, rgba(173,109,244,0.04) 1px, transparent 1px, transparent 20px),
                        repeating-linear-gradient(-45deg, rgba(218,125,32,0.04) 0, rgba(218,125,32,0.04) 1px, transparent 1px, transparent 30px),
                        repeating-linear-gradient(90deg, rgba(0,0,0,0.015) 0, rgba(0,0,0,0.015) 1px, transparent 1px, transparent 80px)
                    `,
          backgroundSize: "80px 80px, 40px 40px, 60px 60px, 80px 80px",
          backgroundPosition: "0 0, 0 0, 0 0, 40px 40px",
        }}
      />

      {/* Purple Glow Top - Dark Mode Only */}
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background: "#0f0f0f",
          backgroundImage: `
                        radial-gradient(
                            circle at top center,
                            rgba(22, 92, 232, 0.12),
                            transparent 70%
                        )
                    `,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Complex Multiplier Pattern - Dark Mode Only */}
      <div
        className="absolute inset-0 z-0 hidden pointer-events-none dark:block"
        style={{
          backgroundImage: `
                        repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
                        repeating-linear-gradient(45deg, rgba(0,255,128,0.09) 0, rgba(0,255,128,0.09) 1px, transparent 1px, transparent 20px),
                        repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
                        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px),
                        radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
                    `,
          backgroundSize:
            "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
          backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <LenisScroll />
        <Navbar />
        <Header />
        <About />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
