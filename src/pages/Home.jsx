import { useState } from "react"
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

function Home() {
  const [count, setCount] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen w-full bg-black relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #2b0707 100%)",
        }}
      />
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="max-w-md mx-auto px-4 py-8 w-full">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="group">
                <img
                  src={viteLogo}
                  className="h-10 w-10 transition-all duration-300 group-hover:scale-110"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(255, 224, 194, 0.6))' }}
                  alt="Vite logo"
                />
              </div>
              <div className="text-2xl font-bold" style={{ color: '#f4f4f5' }}>+</div>
              <div className="group">
                <img
                  src={reactLogo}
                  className="h-10 w-10 transition-all duration-300 group-hover:scale-110 animate-spin-slow"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(255, 224, 193, 0.6))' }}
                  alt="React logo"
                />
              </div>
            </div>

            <h1 className="text-2xl font-bold mb-3" style={{
              background: 'linear-gradient(90deg, #ffe0c2 0%, #ffe0c1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              React + Vite + Tailwind
            </h1>
            <p className="text-sm mb-4" style={{ color: '#f4f4f5' }}>
              A modern, fast, and beautiful React template
            </p>

            <div className="rounded-lg p-4 border mb-4" style={{
              backgroundColor: 'rgba(30, 15, 15, 0.6)',
              borderColor: 'rgba(220, 38, 38, 0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#fef2f2' }}>Interactive Demo</h3>
              <button
                className="font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm"
                style={{
                  background: 'linear-gradient(90deg, #dc2626 0%, #ef4444 100%)',
                  color: '#ffffff'
                }}
                onClick={() => setCount((count) => count + 1)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Count is {count}
              </button>
              <p className="mt-2 text-xs" style={{ color: '#fca5a5' }}>
                Click to see React state in action!
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            <div className="rounded-lg p-4 border text-center" style={{
              backgroundColor: 'rgba(30, 15, 15, 0.6)',
              borderColor: 'rgba(220, 38, 38, 0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 mx-auto" style={{ backgroundColor: '#dc2626' }}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold mb-2" style={{ color: '#fef2f2' }}>React 19</h3>
              <p className="text-xs" style={{ color: '#fca5a5' }}>Modern React</p>
            </div>

            <div className="rounded-lg p-4 border text-center" style={{
              backgroundColor: 'rgba(30, 15, 15, 0.6)',
              borderColor: 'rgba(220, 38, 38, 0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 mx-auto" style={{ backgroundColor: '#ef4444' }}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold mb-2" style={{ color: '#fef2f2' }}>Vite</h3>
              <p className="text-xs" style={{ color: '#fca5a5' }}>Fast build tool</p>
            </div>

            <div className="rounded-lg p-4 border text-center" style={{
              backgroundColor: 'rgba(30, 15, 15, 0.6)',
              borderColor: 'rgba(220, 38, 38, 0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 mx-auto" style={{ backgroundColor: '#f87171' }}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold mb-2" style={{ color: '#fef2f2' }}>Tailwind</h3>
              <p className="text-xs" style={{ color: '#fca5a5' }}>CSS framework</p>
            </div>
          </div>

          {/* Getting Started */}
          <div className="text-center">
            <h2 className="text-lg font-bold mb-3" style={{ color: '#fef2f2' }}>Ready to get started?</h2>
            <div className="rounded-lg p-3 border mb-4" style={{
              backgroundColor: 'rgba(30, 15, 15, 0.6)',
              borderColor: 'rgba(220, 38, 38, 0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              <p className="mb-3 text-sm" style={{ color: '#fca5a5' }}>Run this command to create a new project:</p>
              <code className="block p-3 rounded-lg text-left font-mono text-xs" style={{
                backgroundColor: 'rgba(15, 5, 5, 0.8)',
                color: '#f87171',
                border: '1px solid rgba(220, 38, 38, 0.2)'
              }}>
                npm create vite-react-ai@latest my-project
              </code>
            </div>

            {/* Repository Info */}
            <div className="rounded-lg p-3 border" style={{
              backgroundColor: 'rgba(30, 15, 15, 0.6)',
              borderColor: 'rgba(220, 38, 38, 0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              <p className="mb-2 text-sm" style={{ color: '#fca5a5' }}>Template Repository:</p>
              <a
                href="https://github.com/abhayymishraa/vite-react-ai-template"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 rounded-lg text-left font-mono text-xs transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(15, 5, 5, 0.8)',
                  color: '#f87171',
                  border: '1px solid rgba(220, 38, 38, 0.2)',
                  textDecoration: 'none'
                }}
              >
                https://github.com/abhayymishraa/vite-react-ai-template
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home