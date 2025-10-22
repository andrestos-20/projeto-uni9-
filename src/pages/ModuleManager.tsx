import { useModules } from "@/contexts/ModulesContext"

export default function ModuleManager(){
  const { modules } = useModules()
  const logged = typeof window!=='undefined' && localStorage.getItem('adminLogged')
  if(!logged) return <p>Não autorizado. Faça login.</p>
  return (
    <>
      <h1>Gerenciador de Módulos</h1>
      <ul>
        {modules.map(m => <li key={m.id}>{m.title} — {m.materials.length} materiais</li>)}
      </ul>
    </>
  )
}