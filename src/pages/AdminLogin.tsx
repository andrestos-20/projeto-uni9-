import { useState } from "react"
import { useLocation } from "wouter"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminLogin(){
  const [, setLoc] = useLocation()
  const [email, setEmail] = useState("")
  const [ra, setRa] = useState("")
  const handle = (e:React.FormEvent)=>{ e.preventDefault(); localStorage.setItem('adminLogged','1'); setLoc('/admin/modulos') }
  return (
    <div style={{maxWidth:420, margin:'40px auto'}}>
      <Card>
        <CardHeader><CardTitle>Login do Admin</CardTitle></CardHeader>
        <CardContent>
          <form onSubmit={handle} className="grid" style={{gridTemplateColumns:'1fr', gap:12}}>
            <Input placeholder="E-mail" value={email} onChange={e=>setEmail(e.target.value)} required />
            <Input placeholder="RA" value={ra} onChange={e=>setRa(e.target.value)} required />
            <Button type="submit">Entrar</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}