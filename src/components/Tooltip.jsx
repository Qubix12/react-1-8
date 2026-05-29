import '../App.css'


function ToolTip({ children, hint }) {
  return (
    <div className="tooltip-wrapper">
      {children}
      <div className="tooltip-content">{hint}</div>
    </div>
  )
}


export default ToolTip