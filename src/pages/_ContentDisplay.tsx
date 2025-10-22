type Material = { id:string; type:'pdf'|'video'|'link'; title:string; url:string; description?:string }
export default function ContentDisplay({ material }:{ material:Material }){
  if(material.type==='video'){
    return (
      <div className="card">
        <h3>{material.title}</h3>
        <div style={{position:'relative',paddingTop:'56.25%'}}>
          <iframe src={material.url} title={material.title} style={{position:'absolute',inset:0,width:'100%',height:'100%',border:0}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </div>
    )
  }
  if(material.type==='pdf'){
    return (
      <div className="card">
        <h3>{material.title}</h3>
        <a className="btn" href={material.url} target="_blank" rel="noreferrer">Abrir PDF</a>
      </div>
    )
  }
  return (
    <div className="card">
      <h3>{material.title}</h3>
      <a className="btn" href={material.url} target="_blank" rel="noreferrer">Abrir Link</a>
    </div>
  )
}