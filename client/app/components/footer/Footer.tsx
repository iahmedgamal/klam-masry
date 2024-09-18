import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='w-full py-4 text-white bg-gray-950'>
      <div className='container flex items-center justify-between px-4 mx-auto'>
        <div>
          <Link
            href='https://www.linkedin.com/in/ahmadgmustafa/'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-colors hover:text-blue-400'>
            LinkedIn
          </Link>
        </div>
        <div>
          <Link
            href='https://ko-fi.com/shankat'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-[#FF5E5B] text-white px-4 py-2 rounded hover:bg-[#FF5E5B]/80 transition-colors'>
            Support on Ko-fi
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer