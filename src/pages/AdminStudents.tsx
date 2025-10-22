export default function AdminStudents(){
  const logged = typeof window!=='undefined' && localStorage.getItem('adminLogged')
  if(!logged) return <p>Não autorizado. Faça login.</p>
  return <><h1>Alunos</h1><p className="muted">Área simples demonstrativa.</p></>
}