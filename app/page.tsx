import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Clock, BarChart3, Phone, Mail, MapPin, CheckCircle, Zap, Brain, FileText, QrCode } from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ContactForm } from "@/components/contact-form"
import { ProductGallery } from "@/components/product-gallery"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/thumbshine_logo1.png"
              alt="Thumbshine Logo"
              width={160}
              height={40}
              className="object-contain"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">
              회사소개
            </a>
            <a href="#bokdori" className="text-gray-600 hover:text-green-600 transition-colors">
              복도리
            </a>
            <a href="#product" className="text-gray-600 hover:text-green-600 transition-colors">
              제품사진
            </a>
            <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">
              주요기능
            </a>
            <a href="#cases" className="text-gray-600 hover:text-green-600 transition-colors">
              사용사례
            </a>
            <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">
              문의하기
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-[60vh] min-h-[400px] bg-cover bg-center text-white flex items-center scroll-mt-20"
        style={{ backgroundImage: "url('/hero-image.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="block text-green-400">NEW.</span>
            Thumbshine Experience
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium">
            완전히 새로운 Tiny AI 기반 바이탈 리포트를 경험해보세요.
            <br />
            당신이 원하던 바로 그 AI 바이탈 리포트.
          </p>
          <a
            href="#features"
            className="mt-8 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            더 알아보기
          </a>
        </div>
      </section>

      {/* Original Content Section */}
      <main className="container mx-auto px-4 py-16">
        <section id="intro" className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Tiny AI 기반 바이탈 리포트</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            착용 없이도 어르신의 건강 상태를 실시간으로 지켜드립니다.
            <br />
            돌봄의 품질을 높이는 스마트 파트너, <strong>복도리</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                제품 상담받기
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
                데모 체험하기
              </Button>
            </a>
          </div>

          {/* Hero Image Placeholder */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 mx-auto max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/vital_3.png"
                    alt="바이탈 모니터링 데이터 1"
                    fill
                    className="rounded-lg object-contain"
                  />
                </div>
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/vital_1.png"
                    alt="바이탈 모니터링 데이터 2"
                    fill
                    className="rounded-lg object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Introduction */}
        <section id="about" className="py-20 bg-gray-50 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">텀브샤인을 소개합니다</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                CW 레이더 기술을 기반으로 한 혁신적인 헬스케어 솔루션을 제공하는 기업입니다
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-green-100">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-green-800">혁신 기술</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">CW 레이더 센서 기술로 비접촉 방식의 정확한 바이탈 측정을 실현합니다</p>
                </CardContent>
              </Card>

              <Card className="text-center border-green-100">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-green-800">따뜻한 돌봄</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">어르신의 건강과 안전을 24시간 지켜드리는 따뜻한 기술을 만듭니다</p>
                </CardContent>
              </Card>

              <Card className="text-center border-green-100">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-green-800">신뢰와 안전</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    개인정보 보호와 데이터 보안을 최우선으로 하는 안전한 솔루션을 제공합니다
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Bokdori Product Section */}
        <section id="bokdori" className="py-20 bg-green-50/50 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-block bg-green-100 rounded-full px-4 py-2 mb-6">
                  <span className="text-green-800 font-medium">복도리 제품</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  늘~ 함께해요, 복도리
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  복도리는 장기요양의 스마트 기준입니다. 침대 아래 간단한 설치만으로 어르신의 수면, 심박, 호흡을 실시간으로 모니터링하고 AI가 분석한 건강 리포트를 자동으로 생성합니다.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span className="text-gray-700">비접촉 방식으로 편안한 측정</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span className="text-gray-700">실시간 이상 징후 감지 및 알림</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span className="text-gray-700">AI 기반 수면 분석 및 리포트 생성</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span className="text-gray-700">간편한 설치 및 유지관리 불필요</span>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="#features">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      복도리 자세히 보기
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative w-full max-w-lg mx-auto">
                  <Image
                    src="/bokdori_3.png"
                    alt="복도리 제품 이미지"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section id="product" className="py-20 bg-gray-50 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">제품 사진</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                복도리 제품의 다양한 모습을 확인해보세요
              </p>
            </div>
            <ProductGallery />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">복도리 주요 기능</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                요양기관의 현실을 이해하고 실제 운영에 도움이 되는 기능들을 제공합니다
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-green-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-green-800">실시간 모니터링</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">어르신 수면 상태/심박/호흡을 침대 아래에서 <br></br>비접촉으로 측정합니다</p>
                </CardContent>
              </Card>

              <Card className="border-green-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-green-800">자동 알림</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">이상 징후 감지 시 바로 직원에게 알림을 전송합니다</p>
                </CardContent>
              </Card>

              <Card className="border-green-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-green-800">간편 설치</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">침대 아래 설치, 전원만 연결하면 5분 이내 작동 시작</p>
                </CardContent>
              </Card>

              <Card className="border-green-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Brain className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-green-800">AI 수면 분석</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">어르신의 수면 리듬, 깨는 시간, 호흡 변화 등을<br></br> AI가 자동 분석</p>
                </CardContent>
              </Card>

              <Card className="border-green-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-green-800">리포트 자동 생성</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">보호자 대응용 수면 리포트, 바이탈 리포트를<br></br> 자동으로 생성</p>
                </CardContent>
              </Card>

              <Card className="border-green-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-green-800">개인정보 보호</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">On-Premise 설치로 데이터는<br></br> 자체 서버에 안전하게 저장</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="cases" className="py-20 bg-gray-50 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">실사용 효과 & 사례</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">복도리는 실제로 이렇게 쓰이고 있습니다</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="bg-white border-green-100">
                <CardHeader>
                  <CardTitle className="text-green-800 text-xl">새소망요양원 사례</CardTitle>
                  <CardDescription>매달 10만건 이상의 생체신호 수집</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-gray-700 italic">
                      "복도리를 사용한 후 어르신의 수면 시간과 바이탈을 리포트로 정리하여 보호자에게 설명해줄 수 있어,
                      불필요한 오해나 민원이 크게 줄었습니다."
                    </p>
                    <p className="text-sm text-gray-500 mt-2">- 새소망요양원 사회복지사</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-700 italic">
                      "야간 긴급 상황에 바이탈 리포트를 인쇄하여 병원에 방문했을 때 의사 선생님들이 놀라시더라구요"
                    </p>
                    <p className="text-sm text-gray-500 mt-2">- 새소망요양원 간호사</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-green-100">
                <CardHeader>
                  <CardTitle className="text-green-800 text-xl">주요 개선 효과</CardTitle>
                  <CardDescription>데이터로 증명된 실제 효과</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">야간 낙상 대응 시간</span>
                      <Badge className="bg-green-100 text-green-800">10초 이내</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">보호자 민원 감소</span>
                      <Badge className="bg-blue-100 text-blue-800">70% 감소</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">바이탈 체크 시간</span>
                      <Badge className="bg-purple-100 text-purple-800">1시간 → 자동화</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">직원 스트레스</span>
                      <Badge className="bg-orange-100 text-orange-800">현저히 감소</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 scroll-mt-20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                복도리는 어르신과 함께, 요양기관과 함께합니다
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                기술과 마음으로 지켜드립니다. 복도리, 오늘도 잘 지켰습니다.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">문의하기</h3>
                <ContactForm />
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">연락처 정보</h3>
                  <div className="space-y-5 bg-white p-8 rounded-lg shadow-md mb-8">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-green-600 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-800">주소</p>
                        <p className="text-gray-600">경기도 안산시 상록구 한양대학로55 창업보육센터 532호</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-green-600 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-800">전화</p>
                        <p className="text-gray-600">010-5478-6383</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-green-600 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-800">이메일</p>
                        <p className="text-gray-600">garosu@thumbshine.co.kr</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">데모 신청 (서비스 준비중입니다)</h4>
                  <p className="text-gray-600 mb-4">
                    복도리 제품을 직접 체험해보세요. QR 코드를 스캔하여 데모를 신청하실 수 있습니다.
                  </p>
                  <div className="flex justify-center items-center bg-gray-100 p-4 rounded-md mt-4">
                    <QrCode className="w-24 h-24 text-gray-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Thumbshine. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
