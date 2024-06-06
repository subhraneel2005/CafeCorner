import React from 'react'

function BookATable() {
  return (
    <div className="h-screen w-full flex justify-center items-center" id="bookATable">
        <div className="block space-y-10">
            <h1 className="text-6xl">Book your table now!</h1>
        <div className="flex justify-center items-center h-auto w-auto">
        <div className="space-y-4 h-auto w-auto">
        <input type="text" placeholder="How may People?" className="input input-bordered input-success w-full max-w-xs bg-transparent block text-slate-900" />
        <input type="text" placeholder="Which Date?" className="input input-bordered input-success w-full max-w-xs bg-transparent block text-slate-900" />
        <input type="text" placeholder="Time" className="input input-bordered input-success w-full max-w-xs bg-transparent block text-slate-900" />
        <div className="flex justify-center items-center h-auto w-auto">
        <button className="btn btn-success">Book my table</button>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default BookATable