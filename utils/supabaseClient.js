import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function loginWithTwitter() {
    const  { user, session, error } = await supabase.auth.signIn({
      provider: 'twitter',
    })
}

export async function loginWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
        provider: 'google',
    })
}

export async function logout() {
    const { error } = await supabase.auth.signOut()
}