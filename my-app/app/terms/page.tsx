import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Terms({ searchParams }: Props) {
  const tab = searchParams.tab || 'terms';

  const renderContent = () => {
    switch (tab) {
      case 'privacy':
        return (
          <div className="prose max-w-none">
            <h1>プライバシーポリシー</h1>
            {/* プライバシーポリシーの内容 */}
          </div>
        );
      case 'specified':
        return (
          <div className="prose max-w-none">
            <h1>特定商取引法に基づく表記</h1>
            {/* 特商法の内容 */}
          </div>
        );
      default:
        return (
          <div className="prose max-w-none">
            <h1>利用規約</h1>
            {/* 利用規約の内容 */}
          </div>
        );
    }
  };

  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="min-h-screen">
          <div className="mx-auto w-full px-6 xs:px-7 sm:px-10 max-w-screen-md">
            <nav className="relative flex items-center whitespace-nowrap mt-12 gap-6">
              <div className="absolute bottom-0 left-0 right-0 border-b border-gray-200" />
              <a
                className={`relative inline-flex items-center border-b py-2.5 ${
                  tab === 'terms' || !tab
                    ? 'border-main-body text-main-body'
                    : 'border-transparent text-main-600 hover:text-main-body'
                }`}
                href="/terms"
              >
                利用規約
              </a>
              <a
                className={`relative inline-flex items-center border-b py-2.5 ${
                  tab === 'privacy'
                    ? 'border-main-body text-main-body'
                    : 'border-transparent text-main-600 hover:text-main-body'
                }`}
                href="/terms?tab=privacy"
              >
                <span>
                  プライバシー
                  <span className="hidden sm:inline">ポリシー</span>
                </span>
              </a>
              <a
                className={`relative inline-flex items-center border-b py-2.5 ${
                  tab === 'specified'
                    ? 'border-main-body text-main-body'
                    : 'border-transparent text-main-600 hover:text-main-body'
                }`}
                href="/terms?tab=specified"
              >
                特商法表記
              </a>
            </nav>
            <div className="mt-12 pb-32">
              {renderContent()}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
