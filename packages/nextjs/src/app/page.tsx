'use client';

import { useGlobalAuthenticationStore } from '@/components/auth/store/data';
import QuickPost from '@/components/quickPost/quickPost';
import Navbar from '@/components/navbar/NavBar';
import CreatePostModal from '@/components/floating-button/button';
import Post from '@/components/post/page';
import { Example } from '@/components/Example';

export default function Home() {
  const address = useGlobalAuthenticationStore((state) => state.address);

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-8 w-full items-center">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1>Hi</h1>
          <p>{address}</p>
        </div>
        <QuickPost />
        <Post />
        <Example />
      </main>
      <CreatePostModal />
    </div>
  );
}
