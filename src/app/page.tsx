'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithOtp({ email })

    if (error) {
      setMessage('Something went wrong.')
      console.error(error)
    } else {
      setMessage('Check your email for the login link.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md space-y-4">
        <h2 className="text-xl font-bold">Login / Signup</h2>
        <Input
          type="email"
          className="border p-2 w-full"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Send Magic Link
        </Button>
        {message && <p className="text-sm text-gray-600">{message}</p>}
      </form>
    </div>
  )
}
