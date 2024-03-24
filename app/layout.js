'use client';
import { useEffect } from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { ErrorBoundary } from '@sentry/nextjs';
import { Montserrat, Nunito } from 'next/font/google';
import { themeChange } from 'theme-change';
import { Toast } from 'common/components/layout/Toast';
import ProtectedRoute from 'modules/auth/components/ProtectedRoute';
import { setupLogging } from 'common/utils/sentry';

import 'react-toastify/dist/ReactToastify.min.css';
import 'common/styles/globals.scss';
import 'common/styles/tailwind.scss';
import useAuthStore from 'modules/auth/store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'common/config/firebase';
import { getUserData } from 'modules/auth/lib';
import Metadata from 'common/components/layout/Metadata';
import Script from 'next/script';

const workSans = Montserrat({
  subsets: ['latin'],
  variable: '--font-family-sans',
  fallback: ['system-ui', 'Helvetica Neue', 'Helvetica', 'Arial'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const authPaths = ['/profile', '/app', '/photos', '/payment', '/add'];

const requireAuth = (path) => {
  return authPaths.some((authPath) => {
    const regex = new RegExp(`^${authPath}(\/|$)`);
    return regex.test(path);
  });
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const { user, setUserData, setUser, setIsLoading } = useAuthStore();

  useEffect(() => {
    themeChange(false);
    setupLogging();
  }, []);

  useEffect(() => {
    const onLoad = async () => {
      if (user?.uid) {
        setUserData(await getUserData(user));
      }
    };

    onLoad();
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ErrorBoundary>
      <html lang="pl" className={workSans.className}>
        <Script strategy="lazyOnload" id="clarity-script">
          {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY}");
        `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7RNRLPT97K"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7RNRLPT97K');
    `}
        </Script>
        {process.env.NEXT_PUBLIC_ANALYTICS_TOKEN ? (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_ANALYTICS_TOKEN}"}`}
          ></script>
        ) : (
          ''
        )}
        <body>
          <Toast />
          <div>
            {requireAuth(pathname) ? (
              <ProtectedRoute>{children}</ProtectedRoute>
            ) : (
              children
            )}
          </div>
        </body>
      </html>
    </ErrorBoundary>
  );
}
