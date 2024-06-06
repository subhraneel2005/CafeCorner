import React from 'react';

function ContactUs() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center" id="contactUs">
      <div className="space-y-4">
        <h1 className="text-4xl text-center">Contact Us</h1>
        <div className="space-y-4">
          <input
            className="block w-full rounded-lg border-2 border-slate-700 outline-none px-4 py-2 bg-transparent text-slate-900"
            placeholder="Your name"
          />
          <input
            className="block w-full rounded-lg border-2 border-slate-700 outline-none text-slate-900 px-4 py-2 bg-transparent"
            placeholder="Give us a feedback!"
          />
          <input
            className="block w-full rounded-lg border-2 border-slate-700 outline-none px-4 py-2 text-slate-900 bg-transparent"
            placeholder="Email (optional)"
          />
          <div className="flex justify-center items-center w-auto h-auto">
          <button className="btn btn-success">Submit</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactUs;
