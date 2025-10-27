import React, { useState } from 'react'

function ThemeTest() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.body.classList.toggle('dark')
    document.body.classList.toggle('light')
  }

  return (
    <div className={`min-h-screen p-8 ${isDark ? 'dark' : 'light'}`}>
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-display font-bold gradient-text-indigo-purple">
            Tailwind Theme Test
          </h1>
          <button
            onClick={toggleTheme}
            className="glass-button"
          >
            Toggle Theme
          </button>
        </div>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold gradient-text-purple-pink">Glass Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-frosted p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Glass Frosted</h3>
              <p className="text-sm opacity-80">
                Hover over me to see the effect!
              </p>
            </div>

            <div className="glass-border p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Glass Border</h3>
              <p className="text-sm opacity-80">
                I have a gradient border effect.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-xl font-semibold mb-2">Glass Card</h3>
              <p className="text-sm opacity-80">
                Pre-styled glass card component.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold gradient-text-indigo-pink">Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-frosted p-6 rounded-xl animate-float">
              <h3 className="text-lg font-semibold">Float</h3>
            </div>

            <div className="glass-frosted p-6 rounded-xl animate-pulse-glow">
              <h3 className="text-lg font-semibold">Pulse Glow</h3>
            </div>

            <div className="glass-frosted p-6 rounded-xl animate-fade-in-up">
              <h3 className="text-lg font-semibold">Fade In Up</h3>
            </div>

            <div className="glass-frosted p-6 rounded-xl animate-scale-in">
              <h3 className="text-lg font-semibold">Scale In</h3>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold gradient-text-indigo-purple">Custom Colors</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-dark-700 p-6 rounded-xl">
              <p className="font-mono text-sm">dark-700</p>
            </div>
            <div className="bg-dark-800 p-6 rounded-xl">
              <p className="font-mono text-sm">dark-800</p>
            </div>
            <div className="bg-dark-900 p-6 rounded-xl">
              <p className="font-mono text-sm">dark-900</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold gradient-text-purple-pink">Button Effects</h2>
          <div className="flex gap-4 flex-wrap">
            <button className="glass-button">
              Glass Button
            </button>
            <button className="glass-button button-hover-lift">
              Hover Lift
            </button>
            <button className="glass-button button-hover-glow">
              Hover Glow
            </button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold gradient-text-indigo-pink">Scroll Indicator</h2>
          <div className="flex justify-center">
            <div className="scroll-indicator"></div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold gradient-text-indigo-purple">Gradient Backgrounds</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-gradient-dark h-32 rounded-xl flex items-center justify-center">
              <span className="text-xs font-mono">gradient-dark</span>
            </div>
            <div className="bg-gradient-light h-32 rounded-xl flex items-center justify-center">
              <span className="text-xs font-mono text-gray-900">gradient-light</span>
            </div>
            <div className="bg-gradient-indigo-purple h-32 rounded-xl flex items-center justify-center">
              <span className="text-xs font-mono">indigo-purple</span>
            </div>
            <div className="bg-gradient-purple-pink h-32 rounded-xl flex items-center justify-center">
              <span className="text-xs font-mono">purple-pink</span>
            </div>
            <div className="bg-gradient-indigo-pink h-32 rounded-xl flex items-center justify-center">
              <span className="text-xs font-mono">indigo-pink</span>
            </div>
          </div>
        </section>

        <section className="glass-panel">
          <h2 className="text-3xl font-bold gradient-text-purple-pink mb-4">Glass Panel</h2>
          <p className="opacity-80">
            This is a pre-styled glass panel with gradient borders. It includes all the fancy
            glassmorphism effects with gradient borders that animate on hover. Perfect for
            highlighting important content sections.
          </p>
        </section>
      </div>
    </div>
  )
}

export default ThemeTest
