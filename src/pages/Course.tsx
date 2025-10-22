import { useParams } from "wouter";
import { useModules } from "@/contexts/ModulesContext";
import ContentDisplay from "@/pages/_ContentDisplay";

type RouteParams = { id: string };

export default function Course() {
  const { id } = (useParams<RouteParams>() ?? { id: "" });

  const { modules } = useModules();
  const mod = modules.find((m) => m.id === id);

  if (!mod) return <p>Módulo não encontrado.</p>;

  return (
    <>
      <h1>{mod.title}</h1>
      <p className="muted">{mod.summary}</p>
      {mod.materials.map((mat) => (
        <div key={mat.id} style={{ marginTop: 16 }}>
          <ContentDisplay material={mat} />
        </div>
      ))}
    </>
  );
}
