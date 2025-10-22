import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Link } from "wouter"
import { useModules } from "@/contexts/ModulesContext"

export default function Home(){
  const { modules } = useModules()
  return (
    <>
      <header>
        <h1>Portal do Curso</h1>
        <p className="muted">Acesse os módulos e materiais</p>
      </header>
      <div className="grid">
        {modules.map(m => (
          <Link href={`/curso/${m.id}`} key={m.id}>
            <Card>
              <CardHeader><CardTitle>{m.title}</CardTitle></CardHeader>
              <CardContent>
                <p className="muted">{m.summary}</p>
                <div style={{marginTop:10}}><Progress value={m.progress} /></div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  )
}