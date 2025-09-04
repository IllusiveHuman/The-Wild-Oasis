import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = "https://bcljdhmwuhahlktfunlv.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjbGpkaG13dWhhaGxrdGZ1bmx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5OTQzOTcsImV4cCI6MjA2NzU3MDM5N30.kB4hvLDEE5GG1nLrKL7jTFceNjPBPhgweu3G7uS3r-I"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase