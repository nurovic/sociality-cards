import React from 'react'

const Status = () => {
    const status = [
        { color: "#acacac", name: "Published", key: "#acacac" },
        { color: "#3ac183", name: "Scheduled", key: "#3ac183" },
        { color: "#f7bf38", name: "Need Approval", key: "#f7bf38" },
        { color: "#fb6450", name: "Error", key: "#fb6450" },
        { color: "#67b1f2", name: "Notes", key: "#67b1f2" },
      ];
  return (
    <>
    {status &&
        status.map((item) => (
          <div key={item.key} className="flex flex-row items-center mr-4">
            <div
              style={{ backgroundColor: item.color }}
              className="h-3 w-3 rounded-full mr-2"
            ></div>
            <div>{item.name}</div>
          </div>
        ))}
        </>
  )
}

export default Status