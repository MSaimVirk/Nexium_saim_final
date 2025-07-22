'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getUser().then(({ data, error }) => {
      if (error || !data.user) {
        router.push('/login')
      } else {
        setUser(data.user)
        setLoading(false)
      }
    })
  }, [])

  if (loading) return <p>Loading...</p>

  return 
  <div>
    Welcome, {user.email}!
    <button
  onClick={async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }}
  className="bg-red-500 text-white px-3 py-1 rounded"
>
  Logout
</button>

  </div>
}
