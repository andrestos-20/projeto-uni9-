import React from 'react'
type P={children:React.ReactNode}
type S={error?:Error}
export default class ErrorBoundary extends React.Component<P,S>{
  state:S={}
  static getDerivedStateFromError(error:Error){ return {error} }
  componentDidCatch(error:Error, info:any){ console.error(error, info) }
  render(){ return this.state.error ? <div className="container"><h2>Ocorreu um erro</h2><pre>{String(this.state.error)}</pre></div> : this.props.children }
}